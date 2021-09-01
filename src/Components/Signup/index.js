

'use strict';

import React, { useState, useEffect, useContext } from 'react';
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
import { useForm } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { userRef } from '../../database/firebaseDb';
import Button from '../Button';
import { AppStyles, AppColors } from '../../themes';
import styles from './styles';
import { AppResources, AppStrings, AppConstants } from '../../config';
import FieldError from '../../Components/FieldError'
import { AuthContext } from '../../database/AuthProvider';
//  import Icon from 'react-native-vector-icons/FontAwesome5';



export default (props) => {
  //  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);
const {signup} =useContext(AuthContext)

  useEffect(() => {
    register('username');
    register('password');
  }, [register]);


  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null };
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
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
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
    if (!form.email || !expression.test(String(form.email))) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          email: AppStrings.translation('SignUp.errorText.emailRequired'),
        };
      });
    }
    if (!form.number || !(/^[0-9.]*$/.exec(form.number))) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          number: AppStrings.translation('SignUp.errorText.validPhonenumber'),
        };
      });
    }
    if (!form.password || (form.password).length < 6) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          password: AppStrings.translation('SignUp.errorText.passwordRequired'),
        };
      });
    }
    if (formSubmit == true) {
      signup(form)
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
                        onChange({ name: 'username', value });
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
                      autoCapitalize="none"
                      placeholder={AppStrings.translation(
                        'SignUp.placeHolder.email',
                      )}
                      style={[AppStyles.regularText, styles.textInput]}
                      onChangeText={value => {
                        onChange({ name: 'email', value });
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
                        onChange({ name: 'number', value });
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
                        onChange({ name: 'password', value });
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
                    // onPress ={()=>signup(form.email, form.password)}
                    underlayColor={AppColors.buttonDarkColor}
                    buttonColor={AppColors.buttonColor}
                    borderColor={AppColors.buttonColor}
                    buttonText={AppStrings.translation(
                      'SignUp.buttonText.signup',
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

