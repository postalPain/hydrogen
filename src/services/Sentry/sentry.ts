import * as Sentry from '@sentry/react-native';
import { AxiosResponse } from 'axios';

import { TUser } from 'services/ServerAPI/types';

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

export const setSentryUser = (user: TUser) => {
  if (!__DEV__) {
    Sentry.setUser(user);
  }
};

export const reportToSentryApiError = (error: AxiosResponse) => {
  // TODO add filter of expected errors
  reportToSentry(error);
};
