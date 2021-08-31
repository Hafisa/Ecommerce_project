

 'use strict';

 import React, {useState, useEffect} from 'react';
 import {
   View,
   Image,
   Text,
   StatusBar,
   TextInput,
   SafeAreaView,
   TouchableOpacity,
   ScrollView,
 } from 'react-native';
 import {useForm} from 'react-hook-form';
 
 import messaging from '@react-native-firebase/messaging';
 
 import Button from '../Button';
 
 import {AppStyles, AppColors} from '../../themes';
 import styles from './styles';
 import {AppResources, AppStrings, AppConstants} from '../../config';
 
//  import Icon from 'react-native-vector-icons/FontAwesome5';
 
 
 
 export default ({navigation}) => {
  //  const dispatch = useDispatch();
   const {register, handleSubmit} = useForm();
 
   const [form, setForm] = useState({});
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);
   const [hidePass, setHidePass] = useState(true);
 
   useEffect(() => {
     register('username');
     register('password');
   }, [register]);
 
    
   const onChange = ({name, value}) => {
     setForm({...form, [name]: value});
     if (value !== '') {
       setErrors(prev => {
         return {...prev, [name]: null};
       });
     } else {
       setErrors(prev => {
         return {
           ...prev,
           [name]: AppStrings.translation('SignIn.errorText.generalInfo'),
         };
       });
     }
   };
 
   const onSubmit = () => {
     let formSubmit = true;
     if (!form.username) {
       formSubmit = false;
       setErrors(prev => {
         return {
           ...prev,
           username: AppStrings.translation('SignIn.errorText.emailRequired'),
         };
       });
     }
     if (!form.password) {
       formSubmit = false;
       setErrors(prev => {
         return {
           ...prev,
           password: AppStrings.translation('SignIn.errorText.passwordRequired'),
         };
       });
     }
     if (formSubmit == true) {

navigation.navigate(AppConstants.scene.home)
      //================SUBMIT---------------


     }
   };
 
   return (
     <SafeAreaView style={AppStyles.safeAreaView}>
       <View style={AppStyles.mainContainer}>
         <View style={[styles.sceneView]}>
           <ScrollView showsVerticalScrollIndicator={false}>
             <View style={[styles.sceneItemsView]}>
             
               <View style={[styles.signInAreaContainer]}>
                 <View style={[styles.signInTitleView]}>
                   <Text style={[AppStyles.titleText]}>
                     {AppStrings.translation('SignIn.sceneText.login')}
                   </Text>
                 </View>
                 <View style={[styles.signInInfoView]}>
                   <Text style={[AppStyles.infoText]}>
                     {AppStrings.translation('SignIn.sceneText.loginInfo')}
                   </Text>
                 </View>
                 <View style={styles.emailPasswordView}>
                   <View style={styles.inputContainerView}>
                     <TextInput
                       placeholderTextColor={AppColors.placeholder}
                       autoCapitalize="none"
                       placeholder={AppStrings.translation(
                         'SignIn.placeHolder.email',
                       )}
                       style={[AppStyles.regularText, styles.textInput]}
                       onChangeText={value => {
                         onChange({name: 'username', value});
                       }}
                     />
                   </View>
                   {errors.username && (
                     <FieldError errorText={errors.username} />
                   )}
                   <View
                     style={[
                       styles.inputContainerView,
                       styles.inputContainerViewPassword,
                     ]}>
                     <TextInput
                       placeholderTextColor={AppColors.placeholder}
                       secureTextEntry={hidePass ? true : false}
                       placeholder={AppStrings.translation(
                         'SignIn.placeHolder.password',
                       )}
                       style={[
                         AppStyles.regularText,
                         styles.textInput,
                         styles.inputPasswordShowHide,
                       ]}
                       onChangeText={value => {
                         onChange({name: 'password', value});
                       }}
                     />
                   
                   </View>
                   {errors.password && (
                     <FieldError errorText={errors.password} />
                   )}
                 </View>
                 <View
                   style={[styles.signInForgotPwdView, AppStyles.rightAligned]}>
                   <TouchableOpacity
                     activeOpacity={0.7}
                     onPress={() => {
                       alert("HAi")
                      //  navigation.navigate(AppConstants.scene.home, {
                      //    thisScene: 'emailEntryScene',
                      //  });
                     }}>
                     <Text style={[AppStyles.infoText]}>
                       {AppStrings.translation(
                         'SignIn.sceneText.forgotPassword',
                       )}
                     </Text>
                   </TouchableOpacity>
                 </View>
                 <View style={styles.footerButton}>
                   <Button
                     title="Submit"
                     onPress={handleSubmit(onSubmit)}
                     underlayColor={AppColors.buttonDarkColor}
                     buttonColor={AppColors.buttonColor}
                     borderColor={AppColors.buttonColor}
                     buttonText={AppStrings.translation(
                       'SignIn.buttonText.login',
                     )}
                     textColor={'#FFFFFF'}
                   />
                 </View>
               </View>
             </View>
           </ScrollView>
         </View>
       </View>
     </SafeAreaView>
   );
 };
 
