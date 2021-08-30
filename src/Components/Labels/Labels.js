import React from 'react'
import { View, Text } from 'react-native'

const Labels = (props) => {
    return (
        <View>
            <Text>{props.title} (label)</Text>
        </View>
    )
}

export default Labels
