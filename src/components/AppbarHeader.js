import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper';

const AppbarHeader = ({ title, subtitle, navigation }) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={ () => navigation.goBack() }/>
                <Appbar.Content title={ title } subtitle={subtitle} />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>
        </View>
    )
}

export default AppbarHeader
