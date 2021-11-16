import I18n from 'react-native-i18n';
import { en } from './en';
import { es } from './es';

export const changeLanguage = (params: string) => {
  I18n.fallbacks = true;

  I18n.translations = {
    en,
    es,
  };

  if (params === 'en') {
    I18n.locale = 'en';
  } else if (params === 'es') {
    I18n.locale = 'es';
  }
};
