import React from 'react'
import { View, Image, ImageBackground } from 'react-native';
import { TextInput, Button, Text, StyleSheet } from 'react-native-paper';


export default function Login({ navigation }) {
    return (
       
       <View style={{ flex: 1 }}>
           <ImageBackground source={require('../assets/top-view-popcorn-on-yellow-background.png')} style={{ width: '100%', height: '100%'}}>
            <Text>See Movie</Text>
            <TextInput label='correo electronico'></TextInput>
            <TextInput label='password'></TextInput>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
            <Button>Iniciar sesion</Button>
            <Button onPress={ () => navigation.navigate('SignIn') }>Registrarse</Button>
        </View>
        </ImageBackground>
       </View>
    )
}

