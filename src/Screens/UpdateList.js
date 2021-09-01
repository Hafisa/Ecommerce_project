import React from 'react'
import { View, Text } from 'react-native'
import UpdateProduct from '../Components/UpdateProduct';
import Update from '../Components/Update'
import Translations from '../translations';
const UpdateList = (props) => {
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
            <Update {...props} />
        </View>
    )
}
export default UpdateList
