import React from 'react'
import { View, Text } from 'react-native'
import Create from '../Components/Create'
import Header from '../Components/Header'
import Translations from '../translations';
const CreateScreen = (props) => {
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
            <Create {...props} />
        </View>
    )
}
export default CreateScreen
