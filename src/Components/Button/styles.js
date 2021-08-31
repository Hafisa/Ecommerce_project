'use strict';

import {StyleSheet} from 'react-native';
import {AppColors,AppSizes} from '../../themes'

export default StyleSheet.create({
  buttonTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: AppSizes.borderRadius,
  },
  buttonText: {
    color: '#FFFFFF',
    margin: 12,
    fontSize: 15,
  },
  buttonTouchDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.disabled,
    borderRadius: AppSizes.borderRadius,
  },
});
