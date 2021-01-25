import React, { createContext, useState } from 'react'
import firebase from '../database/firebase';
export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState({ error_code: '', error_message: '' });
    return (
       <AuthContext.Provider
        value={{
            user,
            setUser,
            loading,
            setLoading,
            error,
            setError,
            login: async (email, password) => {
                try {
                    
                    setLoading(true);
                    await firebase.auth().signInWithEmailAndPassword(email, password);
                                      
                } catch (error) {
                    setError({error_code: error.code, error_message: error.message});
                    console.log(error)
                    setLoading(false); 
                }
            },
            register: async (email, password) => {
                try {

                    setLoading(true);
                    await firebase.auth().createUserWithEmailAndPassword(email, password);
                    
                } catch (error) {
                    console.log(error.code);
                    console.log(error.message);
                    setLoading(false);
                    setError({error_code: error.code, error_message: error.message});
                    
                }
            },
            logout: async () => {
                try {

                    setLoading(true);
                    await firebase.auth().signOut();
                   
                } catch (error) {
                    console.log(error.code);
                    console.log(error.message);
                    setError({error_code: error.code, error_message: error.message});
                    setLoading(false);
                }
            },
        }
        }
       >
           {children}
       </AuthContext.Provider>
    )
}


export default AuthProvider
