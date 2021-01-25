import React, { useContext } from 'react'
import { View, ImageBackground } from 'react-native';
import { TextInput, Button, Text, StyleSheet, HelperText,   } from 'react-native-paper';
import { useState } from 'react/cjs/react.development';
import { AuthContext } from '../../navigation/AuthProvider';
import i18n from 'i18n-js';
import SnackbarError from '../../components/Snackbar';
import styles from '../../styles/Auth';

i18n.fallbacks = true;

export default function Login({ navigation }) {

    const { login, error, setError } = useContext(AuthContext);
    const [email, setEmail] = useState('1');
    const [password, setPassword] = useState('1');
    const [formated, setFormated] = useState(false);
    
    const regularExpression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const handleSubmit = () => {

        if( hasEmailErrors() && hasPasswordErrors() ){
            
            setFormated(true);

        } else {
            login(email, password);
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
       
       <View style={styles.container}>
           <ImageBackground source={require('../../assets/rectangle.png')} style={{ width: '100%', height: '100%'}}>
                <Text style={styles.title}>See Movie</Text>
                <View style={styles.containerForm}>
                    <TextInput mode={'outlined'} label={ i18n.t('email') } style={styles.textInput}  onChange={ e => setEmail( e.nativeEvent.text ) }/>
                    <HelperText style={styles.helperText} type='error' visible={hasEmailErrors()}>
                        { i18n.t('errorEmail') }
                    </HelperText>
                    <TextInput mode={'outlined'} secureTextEntry={true} label={ i18n.t('password') } style={styles.textInput} onChange={e => setPassword(e.nativeEvent.text)}/>
                    <HelperText  style={styles.helperText} type='error' visible={hasPasswordErrors()}>
                        { i18n.t('errorPassword') }
                    </HelperText>
                </View>
            <View style={ styles.containerSubmit }>
                <Button mode='contained' color='white' onPress={ handleSubmit }>Iniciar sesion</Button>
                <Button mode='contained' color ='white' onPress={ () => {  setError(null); return navigation.navigate('SignIn');}}>Registrarse</Button>
            </View>
            <View style={{flex:1}}>
                    { formated ? <Text style={ styles.empytInput }>{ i18n.t('emptyInputs') }</Text> : null}
            </View>
            { error? <SnackbarError error={error}/> : null }
            </ImageBackground>
       </View>
    )
}

