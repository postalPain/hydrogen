import appsFlyer from 'react-native-appsflyer';
import { getTrackingStatus } from 'react-native-tracking-transparency';

export const setupAppsFlyer = async () => {
  const trackingStatus = await getTrackingStatus();

  if (!__DEV__ && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
    await appsFlyer.initSdk(
      {
        devKey: 'KEdj8og5x73mzZ5XdVonbb',
        isDebug: false,
        appId: '1591454394',
        onInstallConversionDataListener: false,
        timeToWaitForATTUserAuthorization: 10,
      },
    );
  }
};
