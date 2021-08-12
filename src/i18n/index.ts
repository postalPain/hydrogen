import { get } from 'lodash';
import translations from './translations';

class I18n {
  private _locale = 'string';

  constructor(locale = 'en') {
    this.locale = locale;
  }

  set locale(locale) {
    this._locale = locale;
  }

  get locale() {
    return this._locale;
  }

  translation(path, params?: any) {
    const translation = get(translations[this.locale], path);

    if (params && typeof translation === 'string') {
      return Object.keys(params).reduce((acc, key) => {
        const reg = new RegExp(`%{${key}}`, 'g');

        return acc.replace(reg, params[key]);
      }, translation);
    }

    return translation;
  }

  /* tslint:disable-next-line */
  t(path, params?: any) {
    return this.translation(path, params);
  }
}

export default new I18n('en');
