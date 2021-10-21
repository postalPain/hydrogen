import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';

export const openLink = async (url: string) => {
  if (await InAppBrowser.isAvailable()) {
    await InAppBrowser.open(url);
  } else {
    await Linking.openURL(url);
  }
};
