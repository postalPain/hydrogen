import * as Sentry from '@sentry/react-native';

import { SENTRY_DSN, ENV } from '@env';


export const setupSentry = () => {
  if (!__DEV__) {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: ENV,
    });
  }
};

export const reportToSentry = (error: Error) => {
  if (!__DEV__) {
    Sentry.captureException(error);
  }
};

// TODO call this function when user logged in
// TODO rewrite type of user from object to user interface
export const setSentryUser = (user: object) => {
  if (!__DEV__) {
    Sentry.setUser(user);
  }
};
