export const SCREENS = {
  Splash: 'Splash',
  Login: 'Login',
  TabNavigator: 'TabNavigator',
  Home: 'Home',
};

export interface IfieldObject {
  value?: string;
  isError?: boolean;
  errorText?: string;
  isFocus?: boolean;
}

export var fieldObject = {
  value: '',
  isError: false,
  errorText: '',
  isFocus: false,
};
