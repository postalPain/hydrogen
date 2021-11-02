import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { navigate } from 'navigation/NavigationUtilities';
import { Routes } from 'navigation';
import url from 'url';

export const dynamicLinksHandler = (link: FirebaseDynamicLinksTypes.DynamicLink | null) => {
  if (!link || !link.url) {
    return;
  }

  const { query, pathname } = url.parse(link.url, true);
  const routeParams = query || {};
  const isResetPassword = /\/password\/(.+)\//;

  if (pathname === '/home') {
    navigate(Routes.DrawerNavigation);
  }
  if (isResetPassword.test(pathname)) {
    const [,token] = isResetPassword.exec(pathname);
    navigate(Routes.UpdatePassword, { token, ...routeParams });
  }
};
