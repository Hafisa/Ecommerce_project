

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
    Dimensions
} from 'react-native';
import { useForm } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';
import Button from '../Button';
import { AppStyles, AppColors } from '../../themes';
import styles from './styles';
import { AppResources, AppStrings, AppConstants } from '../../config';
import FieldError from '../../Components/FieldError'
import { AuthContext } from '../../database/AuthProvider';
import { PostContext } from '../../database/PostContext';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import Loader from '../Loader'
export default (props) => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [hidePass, setHidePass] = useState(true);
    const { signup } = useContext(AuthContext)
    const { postDetails } = useContext(PostContext)
    const [form, setForm] = useState(postDetails);
    useEffect(() => {
        setForm(postDetails)
    }, [postDetails])
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
    const onDelete = () => {
        setLoading(true)
        try {
            firestore().collection('products').doc(postDetails.id).delete().then(() => {
                setLoading(false)
                alert("Product Deleted")
                props.navigation.navigate("Update Product List")
            })
        }
        catch (e) {
            alert("Operation Failed")
        }
    }
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
            try {
                firestore().collection('products').doc(postDetails.id).set({
                    name: form.name,
                    category: form.category,
                    price: form.price,
                    description: form.description,
                    userId: user.uid,
                    createdAt: new Date().toDateString()
                }).then(() => {
                    setLoading(false)
                    alert("Product Updated")
                    props.navigation.navigate("Update Product List")
                })
            }
            catch (e) {
                alert("Operation Failed", e.message)
            }
        }
    };

    return (

        <SafeAreaView style={AppStyles.safeAreaView}>
            {loading?
            <Loader/>
            :
            postDetails && form ?
                <View style={AppStyles.mainContainer}>
                    <View style={[styles.sceneView]}>
                        <ScrollView showsVerticalScrollIndicator={false}>
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
                                    <View style={styles.buttonContainer}>
                                        <View style={styles.footerButton}>
                                            <Button
                                                title="Submit"
                                                width={Dimensions.get('screen').width * 0.40}
                                                onPress={handleSubmit(onSubmit)}
                                                underlayColor={AppColors.buttonDarkColor}
                                                buttonColor={AppColors.buttonColor}
                                                borderColor={AppColors.buttonColor}
                                                buttonText={AppStrings.translation(
                                                    'Product.buttonText.update',
                                                )}
                                                textColor={'#FFFFFF'}
                                            />
                                        </View>
                                        <View style={styles.footerButton}>
                                            <Button
                                                title="Submit"
                                                width={Dimensions.get('screen').width * 0.40}
                                                onPress={handleSubmit(onDelete)}
                                                underlayColor={AppColors.buttonDarkColor}
                                                buttonColor={AppColors.buttonColor}
                                                borderColor={AppColors.buttonColor}
                                                buttonText={AppStrings.translation(
                                                    'Product.buttonText.delete',
                                                )}
                                                textColor={'#FFFFFF'}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                :
                <View>
                    <Text>Select any Product</Text>
                </View>}
        </SafeAreaView>
    );
};

