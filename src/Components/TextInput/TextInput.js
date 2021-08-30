import React from 'react'
import { View, Text } from 'react-native'

const TextInput = (props) => {
    return (
        <View>
            <Text>{props.title} (Text input)</Text>
        </View>
    )
}

export default TextInput
