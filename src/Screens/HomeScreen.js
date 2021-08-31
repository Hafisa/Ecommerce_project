import React from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header'
import Posts from '../Components/Posts'

const HomeScreen = () => {
    return (
        <View>
           <Header/>
           <Posts/>
        </View>
    )
}

export default HomeScreen
