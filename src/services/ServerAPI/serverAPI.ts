import axios from 'axios';
import apiUrls from './apiUrls';
import { reportToSentry } from 'services/Sentry/sentry';

export const xhr = axios.create({
  baseURL: process.env.API_URL,
});

export const addHeader = (headerName: string, headerValue: string, callback?: () => void) => {
  xhr.defaults.headers[headerName] = headerValue;
  if (callback) {
    callback();
  }
};

export const removeHeader = (headerName: string, headerValue: string, callback?: () => void) => {
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
    reportToSentry(error);
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
};
