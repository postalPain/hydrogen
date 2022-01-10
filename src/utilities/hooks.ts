import {
  ForwardedRef, useContext, useEffect, useRef,
} from 'react';
import { setError } from 'store/user/actions';
import { useDispatch } from 'react-redux';
import { getItem, setItem } from 'services/LocalStorage';
import { storageKeys } from '../constants';
import { ModalContext, ModalType } from 'components/ModalProvider';
import VersionCheck from 'react-native-version-check';
import { Platform, Linking } from 'react-native';
import i18n from 'i18n';

export const useResetUserError = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setError(''));
  }, []);
};

export const useForwardedRef = (ref: ForwardedRef<any>) => {
  const innerRef = useRef(null);
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      // eslint-disable-next-line no-param-reassign
      innerRef.current = ref.current;
    }
  });

  return innerRef;
};

export const useAppUpdateModal = () => {
  const { setModalData, closeModal } = useContext(ModalContext);
  const storeName = Platform.OS === 'ios'
    ? i18n.t('modals.updateApp.appStore')
    : i18n.t('modals.updateApp.googlePlay');

  useEffect(() => {
    (async () => {
      const latestCancelledVersion = await getItem(storageKeys.latestCancelledVersion);
      const needUpdate = await VersionCheck.needUpdate();

      const cancelUpdate = () => {
        setItem(storageKeys.latestCancelledVersion, needUpdate?.latestVersion);
        closeModal();
      };

      const goToAppStore = () => Linking.openURL(needUpdate?.storeUrl);

      if (needUpdate?.isNeeded && needUpdate?.latestVersion !== latestCancelledVersion) {
        setModalData({
          layout: ModalType.settings,
          title: i18n.t('modals.updateApp.title'),
          description: i18n.t('modals.updateApp.description', { store: storeName }),
          denyButtonText: i18n.t('modals.updateApp.cancelButton'),
          onDenyButtonPress: cancelUpdate,
          approveButtonText: i18n.t('modals.updateApp.updateButton'),
          onApproveButtonPress: goToAppStore,
        });
      }
    })();
  }, []);
};
