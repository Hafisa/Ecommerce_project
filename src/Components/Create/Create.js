import React from 'react'
import { View, Text } from 'react-native'
import ButtonBox from '../ButtonBox/ButtonBox'
import TextInput from '../TextInput/TextInput'

const Create = () => {
    return (
        <View>
           <TextInput title={"Name"}/>
           <TextInput title={"Category"}/>
           <TextInput title={"Price"}/>
           <TextInput title={"Image browser option"}/>
           <ButtonBox title={"Upload & Submit "}/>
        </View>
    )
}

export default Create
