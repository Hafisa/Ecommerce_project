import React from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header/Header'
import Create from '../Components/Create/Create'

const CreateScreen = () => {
    return (
        <View>
         <Header title={'Header-Place an Add'}/>
         <Create/>
        </View>
    )
}

export default CreateScreen
