import { REDUCER_TYPE } from '@constants';

export const setDarkTheme = (params: any) => ({
  type: REDUCER_TYPE.SET_DARK_THEME,
  data: params,
});
