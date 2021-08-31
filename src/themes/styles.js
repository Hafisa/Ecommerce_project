'use strict';
import {Platform, Dimensions} from 'react-native';
// import { AppColors } from './colors';

import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

export default {
  safeAreaView: {
    flex: 1,
    backgroundColor:Colors.whiteBg
    // height:Dimensions.get('screen').height
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.bgPrimary,
  },
  //------------- Box Shadow --------------
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS=='ios'? 0.2 : 0.5,
    shadowRadius: 2,
    elevation: 1.5,
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
  //-------------- Bottom Tab Styles ---------------
  tabBarStyle: {
    backgroundColor: Colors.whiteBg,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height:45
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginVertical: 5,
  },
  notificationView: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: Colors.bgRed,
    borderRadius: 50,
    paddingVertical: 0,
    paddingHorizontal: 8,
  },
  notificationText: {
    color: '#FFF',
  },
  //----------- Navigation Bar --------------

  navbar: {
    backgroundColor: Colors.bgWhite,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    ...Platform.select({
      ios: {
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowColor: Colors.navBarIcons,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  navbarView: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10
  },
  navbarText: {
    color: Colors.textBlack,
    fontFamily: Fonts.fontFamily.bold,
    fontSize: Fonts.base.regular,
  },
  navbarIconView: {
    position: 'absolute',
    right: 20,
  },
  navbarBackIconView: {
    position: 'absolute',
    left: 12,
  },
  navbarIcon: {
    width: 20,
    height: 20,
  },
  navbarSearchIcon: {
    fontSize: 20,
    color: '#009971',
  },
  inlineNavBarView: {
    backgroundColor: Colors.bgWhite,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowColor: Colors.navBarIcons,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 0,
      },
    }),
  },

  backButton: {
    color: '#009971',
    fontSize: 20,
    padding: 5,
  },
  greenButtonText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.regular,
    color: Colors.textWhite,
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

  titleSemiBoldText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.title,
    color: Colors.textSecondary,
  },
  titleBoldText: {
    fontFamily: Fonts.fontFamily.bold,
    fontSize: Fonts.base.title,
    color: Colors.textPrimary,
  },
  subTitleText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.title,
    color: Colors.textSecondary,
  },
  extraLargeText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.extraLarge,
    color: Colors.textSecondary,
  },
  largeRegularText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.large,
    color: Colors.textSecondary,
  },
  mediumText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.medium,
    color: Colors.textSecondary,
  },
  mediumBoldText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.medium,
    color: Colors.textSecondary,
  },
  smallText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.small,
    color: Colors.textSecondary,
  },
  smallBoldText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.small,
    color: Colors.textSecondary,
  },
  extraSmallText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.base.extraSmall,
    color: Colors.textSecondary,
  },
  extraSmallBoldText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.extraSmall,
    color: Colors.textSecondary,
  },
  labelText: {
    fontFamily: Fonts.fontFamily.semiBold,
    fontSize: Fonts.base.medium,
    color: Colors.drawerIcons,
  },

  greenIcons: {
    fontSize: Sizes.icons,
    color: Colors.bgGreen,
    padding: 5,
  },

  // -------------- Remove -----------------------
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.bgPrimary,
    // height:Dimensions.get('window').height
  },
  blueContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundBlue,
  },
  grayContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.gray,
  },
  lightBoxBg: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#00000090',
  },
  lightBoxContent: {
    backgroundColor: Colors.whiteBg,
  },

  windowSize: {
    height: Sizes.screen.height,
    width: Sizes.screen.width,
  },

  // Give me padding
  padding: {
    paddingVertical: Sizes.padding,
    paddingHorizontal: Sizes.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: Sizes.padding,
  },
  paddingLeft: {
    paddingLeft: Sizes.padding,
  },
  paddingRight: {
    paddingRight: Sizes.padding,
  },
  paddingVertical: {
    paddingVertical: Sizes.padding,
  },
  paddingTop: {
    paddingTop: Sizes.padding,
  },
  paddingBottom: {
    paddingBottom: Sizes.padding,
  },

  // Grid
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex1_5: {
    flex: 1.5,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },

  // Icons

  icons: {
    fontSize: Sizes.icons,
    color: Colors.navBarIcons,
    padding: 6,
  },
  smallIcons: {
    fontSize: Sizes.smallIcons,
    color: Colors.navBarIcons,
  },
  blueIcons: {
    fontSize: Sizes.largeIcons,
    color: Colors.brand.primary,
    padding: 5,
  },

  //Others

  horizontalLine: {
    height: 1,
    backgroundColor: Colors.line,
  },
  darkText: {
    color: Colors.textPrimary,
  },
  whiteText: {
    color: Colors.whiteText,
  },
  blueText: {
    color: Colors.blueText,
  },

  buttonTouch: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
