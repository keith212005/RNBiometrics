import * as networkListener from './networkListener';
import * as isOpenFirstTime from './isOpenFirstTime';
import * as setAppLanguage from './setAppLanguage';
import * as setDarkTheme from './setDarkTheme';

export const actionCreators = Object.assign(
  {},
  networkListener,
  isOpenFirstTime,
  setAppLanguage,
  setDarkTheme,
);
