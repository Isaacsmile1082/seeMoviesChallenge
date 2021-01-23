import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text,  } from 'react-native-paper';

const SignIn = ({ navigation }) => {
    
    return (

        <View style={ { flex: 1,  } } >
            <Text style={ { textAlign: 'center', marginTop: 50 } }>Registrate</Text>
            <TextInput mode='outlined' label='Nombre' style={ { width: '80%', alignSelf: 'center', marginTop: 30 } }></TextInput>
            <TextInput mode='outlined' label='Apellido' style={ { width: '80%', alignSelf: 'center', marginTop: 30 } }></TextInput>
            <TextInput mode='outlined' label='Correo Electronico' style={ { width: '80%', alignSelf: 'center', marginTop: 30 } }></TextInput>
            <View style={ { flex: 1, flexDirection:"row", justifyContent: 'space-around'} }>
                <Button> Registrarse </Button>
                <Button onPress={ () => navigation.goBack() }> Regresar </Button>
                
            </View>
           
        </View>
    )
}

export default SignIn;