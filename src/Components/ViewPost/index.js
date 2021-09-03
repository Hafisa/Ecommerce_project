

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
    Dimensions,
    ActivityIndicator
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
import Loader from '../Loader';
export default (props) => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [hidePass, setHidePass] = useState(true);
    const { signup } = useContext(AuthContext)
    const { postDetails } = useContext(PostContext)
    const [form, setForm] = useState(postDetails);
    const [retailUser, setRetailUser] = useState([])
    // var retailerUser=[]
    useEffect(() => {
        setLoading(true)
        firestore().collection('users').where('id', '==', postDetails?.userId).get().then((snapshot) => {
            // retailerUser=snapshot.docs[0].data()
            setRetailUser(snapshot.docs[0].data())
            setLoading(false)
        })
        setForm(postDetails)

    }, [postDetails])
    return (
        <SafeAreaView style={AppStyles.safeAreaView}>
            {loading ?
                <Loader />
                :
                postDetails && form ?
                    <View style={AppStyles.mainContainer}>
                        <View style={[styles.sceneView]}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.item} >
                                    <View style={styles.itemShare}>
                                        <Image style={styles.shareIcon}
                                            source={
                                                require('../../images/share.png')
                                            }
                                            resizeMode={'stretch'}
                                        />
                                    </View>
                                    <Image style={styles.productIcon}
                                        source={
                                            require('../../images/Product.png')
                                        }
                                        resizeMode={'stretch'}
                                    />

                                    <Text style={styles.title}>{form && form.name}</Text>
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemConLeft}>
                                        <Text style={styles.itemConText}>Name</Text>
                                    </View>
                                    <View style={styles.itemConRight}>
                                        <Text style={styles.itemConText}>{form && form.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemConLeft}>
                                        <Text style={styles.itemConText}>Category</Text>
                                    </View>
                                    <View style={styles.itemConRight}>
                                        <Text style={styles.itemConText}>{form && form.category}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemConLeft}>
                                        <Text style={styles.itemConText}>Price</Text>
                                    </View>
                                    <View style={styles.itemConRight}>
                                        <Text style={styles.itemConText}>{form && form.price}</Text>
                                    </View>
                                </View>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemConLeft}>
                                        <Text style={styles.itemConText}>Posted On</Text>
                                    </View>
                                    <View style={styles.itemConRight}>
                                        <Text style={styles.itemConText}>{form && form.createdAt}</Text>
                                    </View>
                                </View>
                                <View style={styles.bottomContainer}>
                                    <Text style={styles.itemConText}>Description</Text>
                                    <Text>
                                        {form && form.description}
                                    </Text>
                                </View>
                                <View style={styles.dealerContainer}>
                                    <Image style={styles.profileIcon}
                                        source={
                                            require('../../images/profileicon.png')
                                        }
                                        resizeMode={'contain'}
                                    />
                                    <View style={styles.dealerContainerRight}>
                                        <Text style={styles.title}>{retailUser && retailUser.name}</Text>
                                        <Text style={styles.subtext}>{retailUser && retailUser.email}</Text>
                                        <Text style={styles.title2}>{retailUser && retailUser.number}</Text>
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

