'use strict';
import {Platform, Dimensions} from 'react-native';
// import { AppColors } from './colors';

import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

export default {
  safeAreaView: {
    // flex: 1,
    backgroundColor:Colors.whiteBg,
    height:Dimensions.get('screen').height,
    window:Dimensions.get('screen').width
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.bgPrimary,
  },

  //------------- Aligning items --------------
  leftAligned: {
    alignItems: 'flex-start',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLeftAligned: {
    alignItems: 'center',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },
  //------------ Helper Text Styles -------------
  textCenterAligned: {
    textAlign: 'center',
  },
  textRightAligned: {
    textAlign: 'right',
  },

  //------------- Application Texts --------------
  titleText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.XLarge,
    color: Colors.textPrimary,
  },
  contentText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.large,
    color: Colors.textSecondary,
  },
  infoText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.medium,
    color: Colors.textSecondary,
  },
  smallText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.regular,
    color: Colors.textSecondary,
  },
  
  // Text Styles
  regularText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.size,
    color: Colors.textSecondary,
  },
  regularBoldText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.size,
    color: Colors.textSecondary,
  },

};
