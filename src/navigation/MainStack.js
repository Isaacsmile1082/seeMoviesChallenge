import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import grid from '../screens/main/grid';
import { AuthContext } from './AuthProvider';
import movieInfo from '../screens/main/movieInfo';

const Stack = createStackNavigator();

const AuthStack = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='grid' component={ grid }/>
            <Stack.Screen name='movieInfo' component={ movieInfo }/>
        </Stack.Navigator>
    )
}

export default AuthStack
