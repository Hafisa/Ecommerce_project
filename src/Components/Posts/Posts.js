import React from 'react'
import { View, Text } from 'react-native'
import ImageDis from '../ImageDis/ImageDis'
import TextInput from '../TextInput/TextInput'

const Posts = () => {
    return (
        <View>
            <ImageDis/>
            <TextInput title={"name"}/>
            <TextInput title={"category"}/>
            <TextInput title={"price"}/>
            {/* Touchable opacity Move to ViewPosts components */}
        </View>
    )
}

export default Posts
