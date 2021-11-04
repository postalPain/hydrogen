import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import { navigate } from 'navigation/NavigationUtilities';
import { Routes } from 'navigation';
import url from 'url';

export const dynamicLinksHandler = (link: FirebaseDynamicLinksTypes.DynamicLink | null) => {
  if (!link || !link.url) {
    return;
  }

  const { query, pathname } = url.parse(link.url, true);
  const [,crumb] = pathname.split('/');
  const routeParams = query || {};
  const isResetPassword = /\/password\/(.+)\//;

  if (crumb === 'home') {
    navigate(Routes.TabNavigation, {
      screen: Routes.HomeTabScreen,
      params: {
        screen: Routes.HomeScreen,
      },
    });
  }
  if (crumb === 'password' && isResetPassword.test(pathname)) {
    const [,token] = isResetPassword.exec(pathname);
    navigate(Routes.UpdatePassword, { token, ...routeParams });
  }
};
