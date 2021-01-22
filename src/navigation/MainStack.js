import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import grid from '../screens/main/grid';
import { AuthContext } from './AuthProvider';


const Stack = createStackNavigator();

const AuthStack = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='grid' component={ grid }/>
        </Stack.Navigator>
    )
}

export default AuthStack
