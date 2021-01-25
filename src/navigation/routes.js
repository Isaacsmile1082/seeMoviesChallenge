import React, { useState, useEffect, useContext } from 'react';
import Loading from '../screens/helpers/Loading';
import AuthStack from './AuthStack';
import firebase from '../database/firebase';
import { AuthContext } from './AuthProvider';
import MainStack from './MainStack';
import { NavigationContainer } from '@react-navigation/native';


const Routes = () => {

    const { user, setUser, loading, setLoading, setError } = useContext(AuthContext);
    
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged(user) {
        setUser(user);
        if(initializing) setInitializing(false)
        setError(null);
        setLoading(false);
    }

    

    useEffect( () => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        
        return subscriber;
    }, []);

    if(initializing) return null;

    if(loading){
        return <Loading/>;
    }

    return (
       <NavigationContainer>
           { !user ? <AuthStack/> : <MainStack/>}
       </NavigationContainer>
    )
}

export default Routes
