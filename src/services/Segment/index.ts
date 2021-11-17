import analytics from '@segment/analytics-react-native';

export const setupSegment = () => {
  if (!__DEV__) {
    analytics.setup('AwLaHfx4u5NxVbWUBF88qcBvvK1geWK9', {
      trackAppLifecycleEvents: true,
    });
  }
};
