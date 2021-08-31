import React from 'react'
import { View, Text } from 'react-native'
import Signup from '../Components/Signup'
import Translations from '../translations';
const SignupScreen = (props) => {
    const [flag, setFlag] = React.useState(false)

    React.useEffect(() => {
        console.log("signup---",props)
        settranslations()
    }, []);
    const settranslations = async () => {
        await Translations.build();
        setFlag(true)
    }
    return (
        <View>
           <Signup props={props.navigation}/>
        </View>
    )
}

export default SignupScreen
