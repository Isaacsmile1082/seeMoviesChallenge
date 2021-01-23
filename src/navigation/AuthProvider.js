import React, { createContext, useState } from 'react'
import firebase from '../database/firebase';
export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    return (
       <AuthContext.Provider
        value={{
            user,
            setUser,
            loading,
            setLoading,
            login: async (email, password) => {
                try {
                    
                    setLoading(true);
                    await firebase.auth().signInWithEmailAndPassword(email, password);
                                      
                } catch (error) {
                    console.log(error.code);
                    console.log(error.message);
                }
            },
            register: async (email, password) => {
                try {

                    setLoading(true);
                    await firebase.auth().createUserWithEmailAndPassword(email, password);
                    
                } catch (error) {
                    console.log(error.code);
                    console.log(error.message);
                }
            },
            logout: async () => {
                try {

                    setLoading(true);
                    await firebase.auth().signOut();
                   
                } catch (error) {
                    console.log(error.code);
                    console.log(error.message);
                }
            }
        }
        }
       >
           {children}
       </AuthContext.Provider>
    )
}


export default AuthProvider
