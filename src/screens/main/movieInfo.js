import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { Title } from 'react-native-paper';
const movieInfo = ({ route, navigation }) => {

    const { overview,
            posterURL,
            release_date,
            title,
            vote_average    
        } = route.params;
    console.log(route.params);
    return (
        <SafeAreaView style={{flex:1}}>
        <View>
            <Text>{ title }</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri:posterURL}} style={{ width:'50%', height:300 }}/>
            <View style={{flex: 1, flexDirection:'column'}}>
                <Title>{ release_date.split('-')[0] }</Title>
                <Text>{ vote_average }</Text>
            </View>
        </View>
        <View style={{flex:1, flexDirection:"row"}}>
            <Text>
                {overview}
            </Text>
        </View>
        </SafeAreaView>
    )
}

export default movieInfo
