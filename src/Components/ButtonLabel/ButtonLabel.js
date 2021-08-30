import React from 'react'
import { View, Text } from 'react-native'

const ButtonLabel = (props) => {
    return (
        <View>
            <Text>{props.title} (Button label)</Text>
        </View>
    )
}

export default ButtonLabel
