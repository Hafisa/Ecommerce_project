

'use strict';

import React, { useState, useEffect, useContext, useCallback } from 'react';
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
import Button from '../Button';
import { AppStyles, AppColors } from '../../themes';
import styles from './styles';
import { AppResources, AppStrings, AppConstants } from '../../config';
import FieldError from '../../Components/FieldError'
import { AuthContext } from '../../database/AuthProvider';
import Loader from '../Loader' 
export default (props) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext)
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const { signup } = useContext(AuthContext)
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
    let formSubmit = true;
    if (!form.name) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          name: AppStrings.translation('Product.errorText.nameRequired'),
        };
      });
    }
    if (!form.price || !(/^[0-9.]*$/.exec(form.price))) {
      formSubmit = false;
      setErrors(prev => {
        return {
          ...prev,
          price: AppStrings.translation('Product.errorText.priceRequired'),
        };
      });
    }
    if (formSubmit == true) {
      setLoading(true)
      firestore().collection('products').add({
        name: form.name,
        category: form.category,
        price: form.price,
        description: form.description,
        userId: user.uid,
        createdAt: new Date().toDateString()
     }).then(() => {
       setLoading(false)
        alert("Product Added"),
          setForm({})
        props.navigation.navigate("Home")
      })
    }
  };
  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      <View style={AppStyles.mainContainer}>
        <View style={[styles.sceneView]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {loading?
            <Loader/>
            :
            <View style={[styles.sceneItemsView]}>
              <View style={[styles.signInAreaContainer]}>
                <View style={styles.emailPasswordView}>
                  <View style={styles.inputContainerView}>
                    <TextInput
                      placeholderTextColor={AppColors.placeholder}
                      autoCapitalize="none"
                      placeholder={AppStrings.translation(
                        'Product.placeHolder.name',
                      )}
                      value={form.name}
                      style={[AppStyles.regularText, styles.textInput]}
                      onChangeText={value => {
                        onChange({ name: 'name', value });
                      }}
                    />
                  </View>
                  {errors.name && (
                    <FieldError errorText={errors.name} />
                  )}
                  <View
                    style={[
                      styles.inputContainerView,
                    ]}>
                    <TextInput
                      placeholderTextColor={AppColors.placeholder}
                      autoCapitalize="none"
                      placeholder={AppStrings.translation(
                        'Product.placeHolder.category',
                      )}
                      value={form.category}
                      style={[AppStyles.regularText, styles.textInput]}
                      onChangeText={value => {
                        onChange({ name: 'category', value });
                      }}
                    />
                  </View>
                  <View
                    style={[
                      styles.inputContainerView,
                    ]}>
                    <TextInput
                      placeholderTextColor={AppColors.placeholder}
                      placeholder={AppStrings.translation(
                        'Product.placeHolder.price',
                      )}
                      value={form.price}
                      style={[AppStyles.regularText, styles.textInput]}
                      onChangeText={value => {
                        onChange({ name: 'price', value });
                      }}
                    />
                  </View>
                  {errors.price && (
                    <FieldError errorText={errors.price} />
                  )}
                  <View
                    style={[
                      styles.inputContainerView,
                    ]}>
                    <TextInput
                      placeholderTextColor={AppColors.placeholder}
                      placeholder={AppStrings.translation(
                        'Product.placeHolder.description',
                      )}
                      value={form.description}
                      style={[AppStyles.regularText, styles.textInput]}
                      onChangeText={value => {
                        onChange({ name: 'description', value });
                      }}
                    />
                  </View>
                </View>
                <View style={styles.footerButton}>
                  <Button
                    title="Submit"
                    onPress={handleSubmit(onSubmit)}
                    underlayColor={AppColors.buttonDarkColor}
                    buttonColor={AppColors.buttonColor}
                    borderColor={AppColors.buttonColor}
                    buttonText={AppStrings.translation(
                      'Product.buttonText.submit',
                    )}
                    textColor={'#FFFFFF'}
                  />
                </View>
              </View>
            </View>
}
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

