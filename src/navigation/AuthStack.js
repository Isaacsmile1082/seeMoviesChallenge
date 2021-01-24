import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import SignIn from '../screens/Auth/SignIn';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={ Login }/>
            <Stack.Screen name='SignIn' component={SignIn }/>
        </Stack.Navigator>
    )
}

export default AuthStack
