import React from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header/Header'
import ViewPost from '../Components/ViewPost/ViewPost'

const ViewPostScreen = () => {
    return (
        <View>
          <Header title={'Header-Details'}/>
          <ViewPost/>
        </View>
    )
}

export default ViewPostScreen
