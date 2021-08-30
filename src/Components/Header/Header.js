import React, { Children } from 'react'
import { View, Text } from 'react-native'
import Labels from '../Labels/Labels'

const Header = (props) => {
    return (
        <View>
            <Labels {...props}/>
        </View>
    )
}

export default Header
