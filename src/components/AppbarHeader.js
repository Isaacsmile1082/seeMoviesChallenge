import React, {  useState, useContext } from 'react'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { AuthContext } from '../navigation/AuthProvider';



const AppbarHeader = ({ subtitle, title, navigation,  }) => {

    const [active, setActive] = useState('false');
    const { logout } = useContext(AuthContext)

    const handleLogin = () => {

        setActive('true');
        setTimeout(() => {
            logout();
        }, 100);
    }
    
    return (
      
            <View >
                <Appbar.Header>
                    <Appbar.Content title={ subtitle } subtitle={ title } />
                    <Appbar.Action icon={() => <Icon name='logout' color='#fff' size={20}/>} onPress={handleLogin}/>            
                </Appbar.Header>
               
            </View>
      

        
    )
}

export default AppbarHeader
