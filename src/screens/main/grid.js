import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { AuthContext } from '../../navigation/AuthProvider';


const grid = () => {

    const { user, setUser, logout } = useContext(AuthContext);

    const logOut = () => {
        setUser(logout);
    }

    return (
        <View>
            <Text>Has sido autenticado</Text>
            <Button onPress={ logout }>Logout</Button>
        </View>
    )
}

export default grid
