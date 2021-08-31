

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
 import FieldError from '../../Components/FieldError'
//  import Icon from 'react-native-vector-icons/FontAwesome5';
 
 
 
 export default (props) => {
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
           [name]: AppStrings.translation('SignUp.errorText.generalInfo'),
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
           username: AppStrings.translation('SignUp.errorText.nameRequired'),
         };
       });
     }
     if (!form.email) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          email: AppStrings.translation('SignUp.errorText.emailRequired'),
        };
      });
    }
    if (!form.number) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          number: AppStrings.translation('SignUp.errorText.validPhonenumber'),
        };
      });
      console.log(JSON.stringify(errors))
    }
     if (!form.password) {
       formSubmit = false;
       setErrors(prev => {
         return {
           ...prev,
           password: AppStrings.translation('SignUp.errorText.passwordRequired'),
         };
       });
     }
     if (formSubmit == true) {
      console.log({props})

      props.navigation.navigate(AppConstants.scene.home)
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
                     {AppStrings.translation('SignUp.sceneText.signup')}
                   </Text>
                 </View>
                 <View style={styles.emailPasswordView}>
                   <View style={styles.inputContainerView}>
                     <TextInput
                       placeholderTextColor={AppColors.placeholder}
                       autoCapitalize="none"
                       placeholder={AppStrings.translation(
                         'SignUp.placeHolder.name',
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
                       placeholder={AppStrings.translation(
                         'SignUp.placeHolder.email',
                       )}
                       style={[AppStyles.regularText, styles.textInput]}
                       onChangeText={value => {
                         onChange({name: 'email', value});
                       }}
                     />
                   
                   </View>
                   {errors.email && (
                     <FieldError errorText={errors.email} />
                   )}
                    <View
                     style={[
                       styles.inputContainerView,
                       styles.inputContainerViewPassword,
                     ]}>
                     <TextInput
                       placeholderTextColor={AppColors.placeholder}
                       placeholder={AppStrings.translation(
                         'SignUp.placeHolder.number',
                       )}
                       style={[AppStyles.regularText, styles.textInput]}
                       onChangeText={value => {
                         onChange({name: 'number', value});
                       }}
                     />
                   
                   </View>
                   {errors.number && (
                     <FieldError errorText={errors.number} />
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
                         'SignUp.placeHolder.password',
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
               
                 <View style={styles.footerButton}>
                   <Button
                     title="Submit"
                     onPress={handleSubmit(onSubmit)}
                     underlayColor={AppColors.buttonDarkColor}
                     buttonColor={AppColors.buttonColor}
                     borderColor={AppColors.buttonColor}
                     buttonText={AppStrings.translation(
                       'SignUp.buttonText.register',
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
 
