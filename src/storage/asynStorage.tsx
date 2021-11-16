/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';

//store data in local storage
export const setMultipleAsyncStorage = (data: string[][]) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiSet(data)
      .then(() => {
        resolve(true);
      })
      .catch((error) => reject(error));
  });
};

//get data from local storage
export const getMultipleAsyncStorage = (data: string[]) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiGet(data)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => reject(error));
  });
};

// remove Data from async Storage
export const removeData = async (keys: string[]) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiRemove(keys)
      .then(() => {
        resolve(true);
      })
      .catch((error) => reject(error));
  });
};

//get data from local storage
export const clearAsynStorage = (data: any) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => resolve(true));
  });
};
