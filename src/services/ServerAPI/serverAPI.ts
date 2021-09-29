import { Alert } from 'react-native';
import axios from 'axios';
import apiUrls from './apiUrls';
import { reportToSentry } from 'services/Sentry/sentry';
import { API_URL } from '@env';

import i18n from 'i18n';

export const xhr = axios.create({
  baseURL: API_URL,
});

export const addHeader = (headerName: string, headerValue: string, callback?: () => void) => {
  xhr.defaults.headers[headerName] = headerValue;
  if (callback) {
    callback();
  }
};

export const removeHeader = (headerName: string, callback?: () => void) => {
  delete xhr.defaults.headers[headerName];
  if (callback) {
    callback();
  }
};

xhr.interceptors.request.use(
  (config) => config,
  (error) => {
    reportToSentry(error);
    return Promise.reject(error);
  },
);
xhr.interceptors.response.use(
  (response) => response,
  (error) => {
    Alert.alert(i18n.t('alerts.title'), error.message);
    // reportToSentry(error);
    return Promise.reject(error);
  },
);

export const userAPI = {
  signIn(authData: any): Promise<any> {
    return xhr.post(apiUrls.signIn, authData);
  },
  signOut(): Promise<any> {
    return xhr.get(apiUrls.signOut);
  },
  getCurrentUser(): Promise<any> {
    return xhr.get(apiUrls.getUser);
  },
  getCategories(): Promise<any> {
    return xhr.get(apiUrls.getCategories);
  },
  getProductsBySubcategory(slug): Promise<any> {
    return xhr.get(apiUrls.getProductsBySubcategory(slug));
  },
  addCard(token: { token: string }) : Promise<any> {
    return xhr.post(apiUrls.addCard, token);
  },
};
