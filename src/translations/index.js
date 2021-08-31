'use strict';

import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';

import {AppStrings} from '../config';
import en from './en.json';

class translation {
  build() {
    this.update();
  }

  update() {
    const translations = {en};

    const fallback = {languageTag: 'en', isRTL: false};

    const {languageTag, isRTL} =
      RNLocalize.findBestAvailableLanguage(Object.keys(translations)) ||
      fallback;

    // clear translation cache
    AppStrings.translation.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = translations;
    i18n.locale = languageTag;
  }

  start(func = null) {
    RNLocalize.addEventListener('change', () => {
      this.update();
      if (func) {
        func();
      }
    });
  }

  stop(func = null) {
    RNLocalize.removeEventListener('change', () => {
      this.update();
      if (func) {
        func();
      }
    });
  }
}

export default new translation();
