import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'

const index = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#e78c7f" />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        alignItems: 'center', flex: 1, justifyContent: 'center'
    }
})
