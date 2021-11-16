import I18n from 'react-native-i18n';
import { en } from './en';
import { es } from './es';

export const localize = (name: string, params?: object) => {
  I18n.fallbacks = true;
  I18n.translations = {
    en,
    es,
  };

  return I18n.t(name, params);
};
