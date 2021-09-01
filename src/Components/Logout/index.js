import React, { useContext } from 'react';
import { AuthContext } from '../../database/AuthProvider';
import { Button, View, Text, TouchableHighlight } from 'react-native';

export default props => {
    const { user, logout } = useContext(AuthContext)
    return (
        <View>
            <TouchableHighlight
                onPress={() => logout()}
            >
                <Text>logout</Text>
            </TouchableHighlight>

        </View>
    )
}