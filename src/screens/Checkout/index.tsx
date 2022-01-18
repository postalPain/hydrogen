import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Pressable, ScrollView, TextInput, View,
} from 'react-native';
import {
  Button,
  Input,
  Text,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import BottomSheet from '@gorhom/bottom-sheet';
import { StackActions, useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import Routes from 'navigation/Routes';
import { checkoutErrorHandler, getProductsReceipt } from 'utilities/helpers';
import {
  checkPromoCode,
  createOrder,
  removeDefaultCard,
  resetCreateOrderError,
  resetPromoCode,
} from 'store/user/actions';
import {
  basketSelector,
  checkoutErrorDataSelector,
  checkoutErrorMessageSelector,
  checkoutLoadingSelector,
  defaultCardSelector,
  deliveryAddressSelector,
  promoCodeErrorSelector,
  promoCodeLoadingSelector,
  promoCodeSelector,
  temporaryDeliveryAddressSelector,
  userErrorSelector,
} from 'store/user/selectors';
import {
  CardVariant,
  ChangePaymentMethod,
  ModalOverlay,
  OutOfStockSlideUp,
  PaymentCardForm,
  PaymentMethod,
} from 'components';
import { GeoPoint, LeftArrow } from 'components/Icons';
import useStyles from './styles';
import { IDeliveryAddress } from 'store/user/reducers/types';
import { useResetUserError } from 'utilities/hooks';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';
import { ModalContext, ModalType } from 'components/ModalProvider';


interface ICheckoutProps {
  theme: ProjectThemeType;
}

const Checkout: React.FC<ICheckoutProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const addCardModalRef = useRef<BottomSheet>(null);
  const changeCardModalRef = useRef<BottomSheet>(null);
  const cardVariantModalRef = useRef<BottomSheet>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollToTheBottom = () => scrollViewRef.current.scrollToEnd();
  const handleOpenPaymentCardModal = () => {
    addCardModalRef.current.expand();
    scrollToTheBottom();
  };
  const handleOpenChangeCard = () => {
    changeCardModalRef.current.expand();
    scrollToTheBottom();
  };
  const handleOpenCardVariant = () => {
    cardVariantModalRef.current.expand();
    scrollToTheBottom();
  };
  const handleClosePaymentCardModal = () => addCardModalRef.current.close();
  const handleCloseChangeCard = () => changeCardModalRef.current.close();
  const defaultCard = useSelector(defaultCardSelector);
  const isDefaultCard = !!Object.keys(defaultCard).length;
  const [outOfStockSlideUpVisible, setOutOfStockSlideUpVisible] = useState(false);
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [couponName, setCouponName] = useState('');
  const promoCode = useSelector(promoCodeSelector());
  const promoCodeLoading = useSelector(promoCodeLoadingSelector());
  const promoCodeError = useSelector(promoCodeErrorSelector());
  const checkoutLoading = useSelector(checkoutLoadingSelector());
  const checkoutErrorMessage = useSelector(checkoutErrorMessageSelector());
  const checkoutErrorResponseData = useSelector(checkoutErrorDataSelector());
  const basket = useSelector(basketSelector());
  const products = Object.values(basket);
  const discount = promoCode && promoCode.discount || 0;
  const receipt = getProductsReceipt(products, discount);
  const deliveryAddress = useSelector(deliveryAddressSelector);
  const temporaryDeliveryAddress = useSelector(temporaryDeliveryAddressSelector);
  const address: IDeliveryAddress = temporaryDeliveryAddress || deliveryAddress;
  const handleChangeAddress = () => navigator
    .dispatch(StackActions.push(Routes.MapScreen, { changeAddress: true }));
  const isCardDeclined = checkoutErrorMessage?.includes('Your card was declined');
  const addingCardError = useSelector(userErrorSelector);
  const { setModalData, closeModal } = useContext(ModalContext);

  // Fix issue on android, see: https://github.com/gorhom/react-native-bottom-sheet/issues/642
  useEffect(() => {
    setTimeout(() => {
      handleClosePaymentCardModal();
      handleCloseChangeCard();
    }, 400);
  }, []);

  useEffect(() => {
    if (checkoutErrorResponseData) {
      setOutOfStockSlideUpVisible(true);
    }
  }, [checkoutErrorResponseData]);

  useEffect(() => {
    if (isCardDeclined) {
      setModalData({
        layout: ModalType.default,
        title: i18n.t('modals.declinedPaymentModal.title'),
        description: i18n.t('modals.declinedPaymentModal.description'),
        buttonText: i18n.t('modals.declinedPaymentModal.button'),
        onButtonPress: closeModal,
      });
      dispatch(removeDefaultCard());
    }
  }, [isCardDeclined]);

  useResetUserError();

  const onCheckoutPress = () => {
    dispatch(createOrder({
      comment: deliveryInstructions,
    }));
  };
  const onCartUpdate = () => {
    setOutOfStockSlideUpVisible(false);

    dispatch(resetCreateOrderError());
    // @ts-ignore
    navigator.navigate(Routes.Basket, { updated: true });
  };
  const onCouponButtonPress = () => {
    if (couponName) {
      dispatch(checkPromoCode(couponName));
      trackEvent(TrackingEvent.PromoCode, { promo_code_name: couponName });
    }
  };
  const onCouponTextChange = (text) => {
    setCouponName(text);
    if (promoCode || promoCodeError) {
      dispatch(resetPromoCode());
    }
  };

  const loading = promoCodeLoading || checkoutLoading;
  const unAvailableProductIds = (checkoutErrorResponseData || []).map(item => item.uuid);
  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>
            {i18n.t('screens.checkout.deliveryDetails')}
          </Text>
          {
            !!checkoutErrorHandler(checkoutErrorMessage) && !checkoutErrorResponseData && (
              <Text style={styles.errorText}>{checkoutErrorHandler(checkoutErrorMessage)}</Text>
            )
          }
          <Pressable onPress={handleChangeAddress}>
            <Input
              label={i18n.t('screens.checkout.addressLabel')}
              value={address?.full_address || i18n.t('components.locationButton.defaultLocation')}
              disabled
              icon={() => <GeoPoint />}
              style={styles.input}
              inputLabelStyle={styles.label}
            />
          </Pressable>
          <Input
            label={i18n.t('screens.checkout.instructionsLabel')}
            multiline
            maxLength={250}
            onChange={(text) => setDeliveryInstructions(text)}
          />
          <View style={styles.couponContainer}>
            <TextInput
              placeholder={i18n.t('screens.checkout.couponPlaceholder')}
              style={styles.couponField}
              onChangeText={onCouponTextChange}
            />
            <Button
              style={styles.couponButton}
              textStyle={styles.couponButtonText}
              onPress={onCouponButtonPress}
            >
              {i18n.t('screens.checkout.couponButton')}
              {'   '}
              <LeftArrow />
            </Button>
          </View>
          {
            !!promoCodeError && (
              <Text style={styles.errorTextPromo}>{promoCodeError}</Text>
            )
          }
          <PaymentMethod
            addCard={handleOpenPaymentCardModal}
            changeCard={handleOpenChangeCard}
          />
          {
            !!addingCardError && (
              <Text style={styles.errorText}>{addingCardError}</Text>
            )
          }
          <Text style={styles.title}>
            {i18n.t('screens.checkout.cartTotal')}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceSubtotal} semibold size={14}>{i18n.t('screens.checkout.subtotal')}</Text>
            <Text style={styles.priceText} bold>{receipt.subtotal}</Text>
          </View>
          {
            !!promoCode && (
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{i18n.t('screens.checkout.promo')}</Text>
                <Text style={styles.priceText}>{`- ${receipt.discount}`}</Text>
              </View>
            )
          }
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{i18n.t('screens.checkout.fee')}</Text>
            <Text style={styles.priceText}>{receipt.delivery}</Text>
          </View>
          <View style={[styles.priceContainer, styles.totalContainer]}>
            <Text style={[styles.priceText, styles.priceTotal]}>
              {i18n.t('screens.checkout.total')}
            </Text>
            <Text style={[styles.priceText, styles.priceTotal]}>
              {receipt.total}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{i18n.t('screens.checkout.vat')}</Text>
            <Text style={styles.priceText}>{receipt.vat}</Text>
          </View>
          <Button
            style={styles.button}
            textStyle={!isDefaultCard && styles.disabledButtonText}
            disabled={!isDefaultCard}
            onPress={onCheckoutPress}
          >
            {i18n.t('screens.checkout.submit')}
          </Button>
        </View>
      </ScrollView>
      <ModalOverlay height="75%" ref={addCardModalRef}>
        <PaymentCardForm total={receipt.total} />
      </ModalOverlay>
      <ModalOverlay height="45%" ref={changeCardModalRef}>
        <ChangePaymentMethod
          addCard={handleOpenPaymentCardModal}
          changeCard={handleOpenCardVariant}
        />
      </ModalOverlay>
      <ModalOverlay height="60%" ref={cardVariantModalRef}>
        <CardVariant />
      </ModalOverlay>
      <OutOfStockSlideUp
        visible={outOfStockSlideUpVisible}
        onCartUpdate={onCartUpdate}
        productIds={unAvailableProductIds}
      />
      { loading && <View style={styles.loadingScreen} /> }
    </>
  );
};

export default withTheme(Checkout);
