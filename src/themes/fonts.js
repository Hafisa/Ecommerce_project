'use strict';

import {Platform} from 'react-native';

// function lineHeight(fontSize) {
//   const multiplier = (fontSize > 20) ? 0.1 : 0.33;
//   return parseInt(fontSize + (fontSize * multiplier), 10);
// }

const base = {
  extraSmall: 10,
  small: 12,
  medium: 13,
  regular: 14,
  large: 17,
  XLarge: 28,
  XXLarge: 30,
  XXXLarge: 47,
  lineHeight: 0,
};

const fontFamily = {
  regular:
    Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SFProDisplay-Regular',
  light: Platform.OS === 'ios' ? 'SFProDisplay-Medium' : 'SFProDisplay-Medium',
  bold: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SFProDisplay-Bold',
  semiBold:
    Platform.OS === 'ios' ? 'SFProDisplay-Semibold' : 'SFProDisplay-Semibold',
  black: Platform.OS === 'ios' ? 'SFProDisplay-Black' : 'SFProDisplay-Black',
};

export default {
  base: {
    ...base,
  },
  fontFamily: {
    ...fontFamily,
  },
};
