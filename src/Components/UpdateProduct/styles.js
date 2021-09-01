
 'use strict';

 import {StyleSheet, Dimensions} from 'react-native';
 import {AppStyles, AppColors} from '../../themes';
 
 export default StyleSheet.create({
   sceneView: {
     flex: 1,
     backgroundColor: '#FFF',
   },
   sceneItemsView: {
     flex: 1,
     paddingBottom: 20,
   },
   signInBgContainer: {
     justifyContent: 'flex-start',
     width: Dimensions.get('screen').width,
   },
   signInBgImage: {
     padding: 20,
     width: Dimensions.get('screen').width,
     height: Dimensions.get('screen').height * 0.35,
     borderBottomLeftRadius: 40,
     borderBottomRightRadius: 40,
   },
   signInAreaContainer: {},
   signInTitleView: {
     paddingTop: 30,
     paddingBottom: 2,
     paddingLeft: 20,
   },
   signInInfoView: {
     paddingTop: 1,
     paddingBottom: 2,
     paddingLeft: 20,
   },
   emailPasswordView: {
     paddingHorizontal: 20,
     paddingTop: 10,
   },
   inputContainerView: {
     borderColor: AppColors.line,
     backgroundColor: AppColors.whiteBg,
     borderWidth: 1,
     borderRadius: 10,
     marginTop: 20,
     maxHeight: 50,
     minHeight: 50,
   },
   inputContainerViewPassword: {
     flexDirection: 'row',
     paddingBottom: 10,
   },
   inputPasswordShowHide: {
     flex: 1,
   },
   inputPasswordShowHideIcon: {
     color: AppColors.textSecondary,
     marginTop: 15,
     marginRight: 15,
   },
   signInForgotPwdView: {
     paddingTop: 15,
     paddingRight: 20,
   },
   textInput: {
     marginHorizontal: 10,
     maxHeight: 50,
     minHeight: 50,
   },
   input: {
     height: 45,
   },
   footerButton: {
     paddingHorizontal: 20,
     marginTop: 30,
   },
   buttonContainer:{
       flexDirection:'row',
      justifyContent:'space-around'
   }
 });
 