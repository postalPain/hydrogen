import AsyncStorage from '@react-native-community/async-storage';

export const getItem = (key: string): any => new Promise(
  (resolve, reject) => AsyncStorage.getItem(key)
    .then((value) => {
      resolve(value);
    })
    .catch((error) => {
      reject(error);
    }),
);

export const setItem = (key: string, value: string): any => new Promise(
  (resolve, reject) => AsyncStorage.setItem(key, value)
    .then((val) => {
      resolve(val);
    })
    .catch((error) => {
      reject(error);
    }),
);

export const removeItem = (key: string): any => new Promise(
  (resolve, reject) => AsyncStorage.removeItem(key)
    .then((value) => {
      resolve(value);
    })
    .catch((error) => {
      reject(error);
    }),
);
