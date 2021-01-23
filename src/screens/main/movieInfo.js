import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { Title } from 'react-native-paper';
import { useGetDetails } from '../../hooks/useGetDetails';

const movieInfo = ({ route, navigation }) => {

    const { id, posterURL } = route.params;
    const { release_date, vote_average, overview, runtime, genres, title } = useGetDetails(id);
   
        return (
            
        <SafeAreaView style={{flex:7}}>
            <View>
                <Text>{ title }</Text>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
                <Image source={{uri:posterURL}} style={{ width:'50%', height:300 }}/>
                <View style={{flex: 1, flexDirection:'column'}}>
                    <Title>{ release_date }</Title> 
                    <Text>{ vote_average }</Text>
                    { !genres? <Text>...</Text>: genres.map( genre => <Text>{ genre.name }</Text>) }
                </View>
            </View>
            <View style={{flex:1, flexDirection:"row"}}>
                <Text>
                    {overview}
                </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
                 <Text>{ runtime }</Text>
            </View>

        </SafeAreaView>
    )
}

export default movieInfo
