import axios from 'axios';
import apiUrls from './apiUrls';
import { reportToSentry } from 'services/Sentry/sentry';
import { API_URL } from '@env';

import i18n from 'i18n';
import { getAxiosErrorMessage } from 'utilities/helpers';

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
    console.log(i18n.t('alerts.title'), error.message);
    // reportToSentry(error);
    return Promise.reject(getAxiosErrorMessage(error));
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
  addCard(token: { token: string }): Promise<any> {
    return xhr.post(apiUrls.cards, token);
  },
  getCardList(): Promise<any> {
    return xhr.get(apiUrls.cards);
  },
  setDefaultCard(id): Promise<any> {
    return xhr.put(apiUrls.setDefaultCard(id));
  },
  createTemporaryUser(address): Promise<any> {
    return xhr.post(apiUrls.createTemporaryUser, address);
  },
  signUp(signUpData): Promise<any> {
    return xhr.post(apiUrls.signUp, signUpData);
  },
  getOrders(): Promise<any> {
    return xhr.get(apiUrls.orders);
  },
  createOrder(orderData): Promise<any> {
    return xhr.post(apiUrls.createOrder, orderData);
  },
  checkPromoCode(code): Promise<any> {
    return xhr.get(apiUrls.checkPromoCode(code));
  },
  resetPassword(email: { email: string }): Promise<any> {
    return xhr.post(apiUrls.resetPassword, email);
  },
  updatePassword(passwordData): Promise<any> {
    return xhr.post(apiUrls.updatePassword, passwordData);
  },
  getAppOptions(): Promise<any> {
    return xhr.get(apiUrls.appOptions);
  },
};
