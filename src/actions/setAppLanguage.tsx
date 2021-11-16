/* eslint-disable @typescript-eslint/no-unused-vars */
import { REDUCER_TYPE } from '@constants';
import { changeLanguage } from '../languages';

export function setAppLanguage(languageCode: string) {
  return (
    dispatch: (arg0: { type: string; data: any }) => void,
    getState: any,
  ) => {
    return new Promise((resolve, reject) => {
      changeLanguage(languageCode);
      return dispatch({
        type: REDUCER_TYPE.SET_APP_LANGUAGE,
        data: languageCode,
      });
    });
  };
}
