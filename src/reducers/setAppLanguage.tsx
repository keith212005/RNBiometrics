import { REDUCER_TYPE } from '@constants';

const intialState = {
  language: '',
};

export const setAppLanguage = (state = intialState, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.SET_APP_LANGUAGE:
      return {
        ...state,
        language: action.data,
      };
    default:
      return state;
  }
};
