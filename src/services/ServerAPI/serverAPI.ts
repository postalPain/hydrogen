import axios from 'axios';
import apiUrls from './apiUrls';
import { reportToSentryApiError } from 'services/Sentry/sentry';
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
    reportToSentryApiError(error);
    return Promise.reject(error);
  },
);
xhr.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(i18n.t('alerts.title'), error.message);
    reportToSentryApiError(error);
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
  getProductsByCategory(id): Promise<any> {
    return xhr.get(apiUrls.getProductsByCategory(id));
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
  checkPromoCode(promoCodeData): Promise<any> {
    return xhr.get(apiUrls.checkPromoCode(promoCodeData));
  },
  resetPassword(email: { email: string }): Promise<any> {
    return xhr.post(apiUrls.resetPassword, email);
  },
  updatePassword(passwordData): Promise<any> {
    return xhr.post(apiUrls.updatePassword, passwordData);
  },
  getClosestWarehouse(): Promise<any> {
    return xhr.get(apiUrls.closestWarehouse);
  },
  search(searchText: string, page: number): Promise<any> {
    return xhr.get(apiUrls.search(searchText, page));
  },
  getWarehouseWorkingHours(id: string): Promise<any> {
    return xhr.get(apiUrls.warehouseWorkingHours(id));
  },
  updateFCMToken(token: { device_key: string }): Promise<any> {
    return xhr.patch(apiUrls.updateFCMToken, token);
  },
  requestPhoneVerification(data): Promise<any> {
    return xhr.post(apiUrls.requestPhoneVerification, data);
  },
  verifyPhone(data): Promise<any> {
    return xhr.post(apiUrls.verifyPhone, data);
  },
  deliveryAddress(data): Promise<any> {
    return xhr.put(apiUrls.deliveryAddress, data);
  },
};
