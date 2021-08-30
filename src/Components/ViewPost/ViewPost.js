import React from 'react'
import { View, Text } from 'react-native'
import ImageDis from '../ImageDis/ImageDis'
import Labels from '../Labels/Labels'

const ViewPost = () => {
    return (
        <View>
            <ImageDis/>
            <Labels title={"name"}/>
            <Labels title={"Category"}/>
            <Labels title={"Price"}/>
            <Labels title={"Added on"}/>
        </View>
    )
}

export default ViewPost

