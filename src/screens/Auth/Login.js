import React, { useContext } from 'react'
import { View, Image, ImageBackground } from 'react-native';
import { TextInput, Button, Text, StyleSheet } from 'react-native-paper';
import { useState } from 'react/cjs/react.development';
import { AuthContext } from '../../navigation/AuthProvider';
export default function Login({ navigation }) {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('angeliss1082@gmail.com');

    const [password, setPassword] = useState('123456');

    
    

    return (
       
       <View style={{ flex: 1 }}>
           <ImageBackground source={require('../../assets/top-view-popcorn-on-yellow-background.png')} style={{ width: '100%', height: '100%'}}>
            <Text>See Movie</Text>
            <TextInput label='correo electronico'></TextInput>
            <TextInput label='password'></TextInput>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
            <Button onPress={ () => login(email, password) }>Iniciar sesion</Button>
            <Button onPress={ () => navigation.navigate('SignIn') }>Registrarse</Button>
        </View>
        </ImageBackground>
       </View>
    )
}

