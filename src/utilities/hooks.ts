import {
  ForwardedRef, useContext, useEffect, useRef,
} from 'react';
import { setError } from 'store/user/actions';
import { useDispatch } from 'react-redux';
import { getItem, setItem } from 'services/LocalStorage';
import { storageKeys } from '../constants';
import { ModalContext, ModalType } from 'components/ModalProvider';
import VersionCheck from 'react-native-version-check';
import { Platform, Linking, BackHandler } from 'react-native';
import i18n from 'i18n';
import { setupAppsFlyer } from 'services/AppsFlyer';
import { hardwareBackPressHandler, isMountedRef } from 'navigation/NavigationUtilities';
import { appInit } from 'store/app/actions';
import { setupSentry } from 'services/Sentry/sentry';
import { requestPushNotificationUserPermission } from 'services/PushNotifications';
import { enableES5 } from 'immer';

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

export const useAppSetup = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Saving app initialization time for event tracking purposes
    const initTime = new Date().getTime();
    setItem(storageKeys.appInitTime, String(initTime));

    // Android specific functionality
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', hardwareBackPressHandler);
      enableES5();
    }

    // Enable bug tracking
    setupSentry();

    // Enable user tracking
    setupAppsFlyer();

    // Request permissions for push notifications for iOS
    requestPushNotificationUserPermission();

    // isMountedRef necessary for NavigationUtils.navigate() function
    isMountedRef.current = true;

    // Start application initialization
    dispatch(appInit());

    return () => {
      isMountedRef.current = false;
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPressHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useEffectUpdate = (callback: () => void) => {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    callback();
  }, [callback]);
};
