import React from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'


const HomeScreen = () => {
    return (
        <View>
           <Header title={'Header- welcome'}/>
           <Posts/>
        </View>
    )
}

export default HomeScreen
