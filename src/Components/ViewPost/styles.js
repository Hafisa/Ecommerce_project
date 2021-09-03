
'use strict';

import { StyleSheet, Dimensions } from 'react-native';
import { AppStyles, AppColors } from '../../themes';

export default StyleSheet.create({
    sceneView: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    sceneItemsView: {
        flex: 1,
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#fbfd9e',
        // padding: 6,
        // marginVertical: 8,
        // marginHorizontal: 16,
        // borderRadius: 15,
        // elevation: 8,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        opacity: 0.7,
        padding: 5,
        height: 250,
        // padding:3
    },
    itemShare:{
        width:'100%',alignItems:'flex-end',paddingRight:10
    },
    dealerContainer: {
        backgroundColor: '#fff',
        padding: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dealerContainerRight:
    {
        paddingLeft: 10, margin: 5
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 5
    },
    bottomContainer: {
        padding: 5,
        marginLeft: 12
    },
    itemConLeft: {
        flex: 1, marginLeft: 12
    },
    itemConRight: {
        flex: 1, alignItems: 'flex-end', marginRight: 12
    },
    itemConText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    profileIcon: {
        width: 30,
        height: 40,
        marginVertical: 5,
        borderRadius: 5,
    },
    productIcon: {
        width: 60,
        height: 80,
        marginVertical: 5,
        borderRadius: 5,
    },
    shareIcon:{
        width: 30,
        height: 30,
        marginVertical: 5,
        borderRadius: 5,  
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'black',
    },
    subtext: {
        fontSize: 12,
        color: 'gray'
    },
    title2: {
        fontSize: 14,
        fontWeight: '500',

        color: '#daa520'
    }
});
