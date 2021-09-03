import React, { useContext } from 'react';
import { AuthContext } from '../../database/AuthProvider';
import { Button, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './styles'
export default props => {
    const { user, logout } = useContext(AuthContext)
    return (
        <View>
            <TouchableOpacity
                onPress={() => logout()}
            >
                <Text style={styles.logoutText}>logout</Text>
            </TouchableOpacity>

        </View>
    )
}