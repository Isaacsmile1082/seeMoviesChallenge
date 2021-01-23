import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Grid from '../screens/main/Grid';
import { AuthContext } from './AuthProvider';
import MovieInfo from '../screens/main/MovieInfo';

const Stack = createStackNavigator();

const MainStack = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Grid' component={ Grid } />
            <Stack.Screen name='MovieInfo' component={ MovieInfo }/>
        </Stack.Navigator>
    )
}

export default MainStack
