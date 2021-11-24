import analytics from '@segment/analytics-react-native';
import { getTrackingStatus } from 'react-native-tracking-transparency';

export const setupSegment = async () => {
  const trackingStatus = await getTrackingStatus();

  if (!__DEV__ && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
    await analytics.setup('AwLaHfx4u5NxVbWUBF88qcBvvK1geWK9', {
      trackAppLifecycleEvents: true,
    });
  }
};
