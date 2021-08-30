import React from 'react'
import { View, Text } from 'react-native'
import ButtonBox from '../ButtonBox/ButtonBox'
import TextInput from '../TextInput/TextInput'

const Signup = () => {
    return (
        <View>
            <TextInput title={"Username"} />
            <TextInput title={"Email"} />
            <TextInput title={"Phone"} />
            <TextInput title={"Password"} />
            <ButtonBox title={"Register"} />
        </View>
    )
}

export default Signup
