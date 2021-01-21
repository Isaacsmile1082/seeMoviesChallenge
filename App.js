import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from './src/screens/Login';
import  SignIn  from './src/screens/SignIn';
const Stack = createStackNavigator();


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
          name="Login"
          component={ Login }
          />
          <Stack.Screen
          name="SignIn"
          component={ SignIn }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
