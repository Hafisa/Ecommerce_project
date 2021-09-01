import React, { useContext } from 'react';
import { AuthContext } from '../../database/AuthProvider';
import { Button, View, Text, TouchableHighlight } from 'react-native';
import styles from './styles'
export default props => {
    const { user, logout } = useContext(AuthContext)
    return (
        <View>
            <TouchableHighlight
                onPress={() => logout()}
            >
                <Text style={styles.logoutText}>logout</Text>
            </TouchableHighlight>

        </View>
    )
}