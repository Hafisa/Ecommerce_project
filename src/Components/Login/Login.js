import React from 'react'
import { View, Text } from 'react-native'
import ButtonBox from '../ButtonBox/ButtonBox'
import ButtonLabel from '../ButtonLabel/ButtonLabel'
import TextInput from '../TextInput/TextInput'

const Login = () => {
    return (
        <View>
            <TextInput title={"EMail"}/>
            <TextInput title={"password"}/>
            <ButtonBox title={"Login"}/>
            <ButtonLabel title={"Register Here"}/>
        </View>
    )
}

export default Login
