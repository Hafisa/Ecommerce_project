import React from 'react'
import { View, Text } from 'react-native'
import ViewPost from '../Components/ViewPost';
import Translations from '../translations';
const ViewPostScreen = (props) => {
    const [flag, setFlag] = React.useState(false)
    React.useEffect(() => {
        settranslations()
    }, []);
    const settranslations = async () => {
        await Translations.build();
        setFlag(true)
    }
    return (
        <View>
            <ViewPost {...props} />
        </View>
    )
}
export default ViewPostScreen
