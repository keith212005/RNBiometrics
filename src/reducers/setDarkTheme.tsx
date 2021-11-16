import { REDUCER_TYPE } from '@constants';

export const setDarkTheme = (state = false, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.SET_DARK_THEME:
      return action.data;
    default:
      return state;
  }
};
