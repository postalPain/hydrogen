import { merge } from 'lodash';
// @ts-ignore en
import en from './locales/en.json';
import de from './locales/de.json';

const translations = {
  en,
  de
};

export const locales = Object.keys(translations);

export default translations;
