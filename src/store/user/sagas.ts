import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { addHeader, removeHeader, userAPI } from 'services/ServerAPI/serverAPI';
import { removeItem, setItem } from 'services/LocalStorage';
import { history } from 'store';
import { appCompleteBoarding } from 'store/app/actions';
import { signedAppDataWorker } from 'store/app/sagas';
import {
  checkPromoCodeError,
  checkPromoCodeSuccess,
  createOrderError,
  createOrderSuccess,
  getUserSuccess, removeDefaultCard,
  saveAddress,
  saveCard,
  saveCardList,
  saveDefaultCard,
  saveOrders,
  saveUser,
  setError,
  signedIn,
  TYPES,
} from './actions';
import {
  cardListSelector,
  defaultCardSelector,
  deliveryAddressSelector,
  temporaryDeliveryAddressSelector,
} from 'store/user/selectors';
import Stripe from 'react-native-stripe-api';
import { STRIPE_PUBLIC_KEY } from '@env';
import { storageKeys } from '../../constants';
import { getNavigationState, navigate } from 'navigation/NavigationUtilities';
import Routes from 'navigation/Routes';
import { convertProductsForOrderSubmission, getCleanObject } from 'utilities/helpers';
import { ICard } from 'store/user/reducers/types';
import i18n from 'i18n';

export function* getUserWorker(): SagaIterator {
  try {
    const response = yield call(userAPI.getCurrentUser);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    history.push('/signin');
  }
}

function* signInWorker(action): SagaIterator {
  try {
    const navigationState = getNavigationState();
    const previousScreen = navigationState && navigationState[navigationState.length - 2]?.name;
    yield put(setError(''));
    const response = yield call(userAPI.signIn, action.payload);
    const { data: { access_token: accessToken, user } } = response.data;
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);
    setItem(storageKeys.authToken, accessToken);
    yield put(signedIn(accessToken));
    yield put(saveUser(user));

    const boardingCompleted = yield select(state => state.app.boardingCompleted);
    if (!boardingCompleted) {
      yield put(appCompleteBoarding());
    }

    yield call(signedAppDataWorker);

    if (previousScreen === Routes.SignUp) {
      yield call(navigate, Routes.Checkout);
    } else {
      yield call(navigate, Routes.DrawerNavigation);
    }
  } catch (error) {
    yield put(setError('Wrong email or password'));
  }
}

function* signOutWorker(): SagaIterator {
  try {
    yield call(removeHeader, 'Authorization');
    // TODO: Uncomment when backend will be ready
    // yield call(userAPI.signOut);
    yield call(removeItem, storageKeys.authToken);
  } catch (error) {
    yield put(setError('Error on logout'));
  }
}

function* addCardWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    const client = new Stripe(STRIPE_PUBLIC_KEY);
    const { id } = yield client.createToken(action.payload);

    const { data: { data } } = yield call(userAPI.addCard, { token: id });

    yield put(saveDefaultCard(data));
    yield put(saveCard(data));
  } catch (e) {
    yield put(setError(e.message || i18n.t('errors.something_went_wrong')));
  }
}

function* addTemporaryCardWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    const client = new Stripe(STRIPE_PUBLIC_KEY);
    const { id, card: { last4, brand } } = yield client.createToken(action.payload);
    const temporaryDefaultCard: ICard = {
      brand,
      last4,
      isDefault: true,
      stripe_card_id: id,
      temporary: true,
    };
    yield put(saveDefaultCard(temporaryDefaultCard));
  } catch (e) {
    yield put(setError(i18n.t('errors.something_went_wrong')));
  }
}

function* setDefaultCardWorker(action): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.setDefaultCard, action.payload);
    yield put(saveCardList(data));
    const defaultCard = data.find((card) => card.isDefault);
    yield put(saveDefaultCard(defaultCard));
  } catch (e) {
    yield put(setError(i18n.t('errors.something_went_wrong')));
  }
}

function* createTemporaryUserWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    const { data: { data } } = yield call(
      userAPI.createTemporaryUser, getCleanObject(action.payload),
    );
    const { access_token: accessToken, delivery_address: deliveryAddress } = data;

    setItem(storageKeys.authToken, accessToken);
    yield put(signedIn(accessToken));
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);

    yield put(saveAddress(deliveryAddress));
    yield call(signedAppDataWorker);

    // finish onboarding
    yield put(appCompleteBoarding());
    navigate(Routes.DrawerNavigation);
  } catch (e) {
    yield put(setError(i18n.t('errors.something_went_wrong')));
  }
}

function* signUpWorker(action): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.signUp, action.payload);
    const { access_token: accessToken, user } = data;
    setItem(storageKeys.authToken, accessToken);
    yield put(signedIn(accessToken));
    yield put(saveUser(user));
    navigate(Routes.Checkout);
  } catch (error) {
    yield put(setError(i18n.t('errors.something_went_wrong')));
  }
}

function* getOrdersWorker(): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.getOrders);
    yield put(saveOrders(data));
  } catch (e) {
    console.log(e);
  }
}

function* createOrderWorker(action): SagaIterator {
  try {
    const basket = yield select(state => state.user.basket);
    const products = convertProductsForOrderSubmission(Object.values(basket));
    const deliveryAddress = yield select(deliveryAddressSelector);
    const temporaryDeliveryAddress = yield select(temporaryDeliveryAddressSelector);
    const promoCodeData = yield select(state => state.user.promoCode.data);
    const defaultCard = yield select(defaultCardSelector);
    const cardList = yield select(cardListSelector);

    const card = defaultCard.temporary ? { token: defaultCard.stripe_card_id } : {};

    const submitData = getCleanObject({
      products,
      comment: action.payload.comment,
      delivery_address: temporaryDeliveryAddress || deliveryAddress,
      promo_code: promoCodeData ? promoCodeData.code : null,
      ...card,
    });

    const { data: { data } } = yield call(userAPI.createOrder, submitData);
    yield put(createOrderSuccess(data));

    if (defaultCard.temporary) {
      yield put(removeDefaultCard());
      if (cardList.length) {
        const newDefaultCard = cardList.find((cardItem: ICard) => cardItem.isDefault);
        yield put(saveDefaultCard(newDefaultCard));
      }
    }

    yield call(navigate, Routes.OrderConfirmation);
  } catch (error) {
    if (error.errors) {
      if (error.errors.meta) {
        const data = error.errors.meta.products;
        yield put(createOrderError(error.message, data));
      } else {
        const errorMessage = Object.values(error.errors.fields).join(' ');
        yield put(createOrderError(errorMessage));
      }
    } else {
      yield put(createOrderError(error.message));
    }
  }
}

function* checkPromoCodeWorker(action): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.checkPromoCode, action.payload);
    yield put(checkPromoCodeSuccess(data));
  } catch (error) {
    yield put(checkPromoCodeError(error.message));
  }
}

function* resetPasswordWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    yield call(userAPI.resetPassword, action.payload);
    navigate(Routes.CheckEmail);
  } catch (error) {
    yield put(setError(i18n.t('errors.resetPassword')));
  }
}

function* updatePasswordWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    yield call(userAPI.updatePassword, action.payload);
    navigate(Routes.ResetPasswordSuccess);
  } catch (error) {
    yield put(setError(error?.errors?.fields?.password[0] || i18n.t('errors.something_went_wrong')));
  }
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(TYPES.SIGN_IN, signInWorker);
  yield takeEvery(TYPES.GET_USER, getUserWorker);
  yield takeEvery(TYPES.SIGN_OUT, signOutWorker);
  yield takeEvery(TYPES.ADD_CARD, addCardWorker);
  yield takeEvery(TYPES.ADD_TEMPORARY_CARD, addTemporaryCardWorker);
  yield takeEvery(TYPES.SET_DEFAULT_CARD, setDefaultCardWorker);
  yield takeEvery(TYPES.CREATE_TEMPORARY_USER, createTemporaryUserWorker);
  yield takeEvery(TYPES.SIGN_UP, signUpWorker);
  yield takeEvery(TYPES.GET_ORDERS, getOrdersWorker);
  yield takeEvery(TYPES.CREATE_ORDER, createOrderWorker);
  yield takeEvery(TYPES.CHECK_PROMO_CODE, checkPromoCodeWorker);
  yield takeEvery(TYPES.RESET_PASSWORD, resetPasswordWorker);
  yield takeEvery(TYPES.UPDATE_PASSWORD, updatePasswordWorker);
}
