import React from 'react'
import { View } from 'react-native'
import Login from '../Components/Login'
import Translations from '../translations';

const LoginScreen = (props) => {
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
            <Login {...props} />
        </View>
    )
}
export default LoginScreen
