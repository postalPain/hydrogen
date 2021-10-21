import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { navigate } from 'navigation/NavigationUtilities';
import { Routes } from 'navigation';
import { DYNAMIC_LINK_URL } from '../constants';

export const dynamicLinksHandler = (link: FirebaseDynamicLinksTypes.DynamicLink | null) => {
  if (!link || !link.url) {
    return;
  }
  if (link.url === `${DYNAMIC_LINK_URL}/home`) {
    navigate(Routes.TabNavigation);
  }
  if (link.url === `${DYNAMIC_LINK_URL}/password`) {
    navigate(Routes.UpdatePassword);
  }
};
