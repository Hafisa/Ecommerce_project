import React from 'react'
import { View } from 'react-native'
import Login from '../Components/Login'
import Translations from '../translations';

const LoginScreen = (props) => {
    const [flag, setFlag] = React.useState(false)

    React.useEffect(() => {
        console.log(";;;;;;;;;;;;",props)
        settranslations()
    }, []);
    const settranslations = async () => {
        await Translations.build();
        setFlag(true)
    }
    return (
        <View>
            <Login props={props.navigation}/>
        </View>
    )
}
export default LoginScreen
