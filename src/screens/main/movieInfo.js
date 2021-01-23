import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { Title } from 'react-native-paper';
import { useGetDetails } from '../../hooks/useGetDetails';
import AppbarHeader from '../../components/AppbarHeader';
import i18n from 'i18n-js';
const MovieInfo = ({ route, navigation }) => {

    const { id, posterURL } = route.params;
    const { release_date, vote_average, overview, runtime, genres, title, } = useGetDetails(id);
    
        return (
        <SafeAreaView style={{flex:7}}>
            <AppbarHeader title={'Movie info'} subtitle={ title } navigation={ navigation }/>
            <View>
                <Text>{ title }</Text>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
                <Image source={{uri:posterURL}} style={{ width:'50%', height:300 }}/>
                <View style={{flex: 1, flexDirection:'column'}}>
                    <Title>{ release_date }</Title> 
                    <Text>{ vote_average }</Text>
                    { !genres? <Text>...</Text>: genres.map( genre => <Text key={genre.id}>{ genre.name }</Text>) }
                </View>
            </View>
            <View style={{flex:1, flexDirection:"row"}}>
                <Text>
                    {overview? overview : i18n.t('emptyOverview')}
                </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
                 <Text>{ runtime }</Text>
            </View>

        </SafeAreaView>
    )
}

export default MovieInfo
