import React, {useState, useContext} from 'react';
import { View, ImageBackground } from 'react-native';
import { TextInput, Button, Text, HelperText  } from 'react-native-paper';
import i18n from 'i18n-js';
import SnackbarError from '../../components/Snackbar';
import { AuthContext } from '../../navigation/AuthProvider';
import styles from '../../styles/Auth';

i18n.fallbacks = true;
const SignIn = ({ navigation }) => {
    
    const regularExpression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const { register, error, setError } = useContext(AuthContext);
    const [email, setEmail] = useState('1');
    const [password, setPassword] = useState('1');
    const [formated, setFormated] = useState(false);
    const handlerEmail = text => setEmail(text.nativeEvent.text);
    const handlerPassword = text => setPassword(text.nativeEvent.text);

    const handleSubmit = () => {

        if( hasEmailErrors() && hasPasswordErrors() ){
            
            setFormated(true);

        } else {
            register(email, password);
        }
    }

    const hasEmailErrors = () => {
        if( regularExpression.test(email) ) {
            return false;
        }
        return true;
    }

    const hasPasswordErrors = () => {
       return password.length < 6
    }


    return (

        <View style={ { flex: 5,  } } >
            <ImageBackground source={require('../../assets/rectangle3.png')} style={{ width: '100%', height: '100%'}}>
                <View style={ styles.containerInputSign }>
                    <Text style={ styles.title }>Registrate</Text>
                    <TextInput mode='outlined' label={ i18n.t('email') } style={ styles.textInput } onChange={handlerEmail}/>
                    <HelperText style={ styles.helperText } type='error' visible={hasEmailErrors()} style={{position:'relative', color:'white', bottom: '5%', left: '5%'}}>
                        { i18n.t('errorEmail') }
                    </HelperText>
                    <TextInput mode='outlined' secureTextEntry={true}  label={ i18n.t('password') } style={ styles.helperText } onChange={handlerPassword}/>
                        <HelperText style={styles.helperText} type='error' visible={hasPasswordErrors()}>
                            { i18n.t('errorPassword') }
                        </HelperText>
                </View>
                <View style={ styles.containerSubmit } >
                        <Button mode='contained' color='white' onPress={handleSubmit}> Registrarse </Button>
                        <Button mode='contained' color='white' onPress={ () => {setError(null); return navigation.goBack() }}> Regresar </Button>
                </View>
                <View style={{flex:1}}>
                { formated ? <Text style={ styles.empytInput }>{ i18n.t('emptyInputs') }</Text> : null}
                </View>
                { error? <SnackbarError error={error}/> : null }
            </ImageBackground>
        </View>
    )
}

export default SignIn;