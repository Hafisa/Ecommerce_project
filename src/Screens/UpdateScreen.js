import React from 'react'
import { View, Text } from 'react-native'
import UpdateProduct from '../Components/UpdateProduct';
import Translations from '../translations';
const UpdateScreen = (props) => {
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
            <UpdateProduct {...props} />
        </View>
    )
}
export default UpdateScreen
