import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, SafeAreaView, Text, Platform , TouchableOpacity, Image, I18nManager } from 'react-native'
import { Button } from 'react-native-paper';
import { useGetMovies } from '../../hooks/useGetMovies';
import Appbar from '../../components/AppbarHeader';
import i18n from 'i18n-js';
import CachedImage from '../../components/CachedImage';


const Poster = ({ poster_path,
                  id,
                  navigation,     
                }) => {

    const posterURL = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        <TouchableOpacity style={{ width: '50%', height: 300}} onPress={() => { navigation.navigate('MovieInfo', {
            id,
            posterURL,
            })}}>
          <CachedImage source={{uri:posterURL}}  cacheKey={`${id}`} style={{ width: '100%', height: 300 }}/>
        </TouchableOpacity>
     
    )
}



const Grid = ({ navigation }) => {
    const [order, setOrder] = useState('top_rated');
    const [page, setPage] = useState(1);
    const movies = useGetMovies(order, page);
    
   
    return (
        
        <SafeAreaView style={{flex: 1, flexDirection:"row"}}>    
            <ScrollView>
            <Appbar title={'SeeMovies'} subtitle={ order==='top_rated'? i18n.t('topRated') : i18n.t('popular') } navigation={ navigation }/>
                <View style={{flex:2, flexDirection:'row', justifyContent:'space-around'}}>
                    <Button mode='contained' onPress={() => setOrder('popular')}>{ i18n.t('popular') }</Button>
                    <Button mode='contained' onPress={() => setOrder('top_rated')}>{ i18n.t('topRated') }</Button>
                </View>
                <View style={{flex: 1, flexDirection:"row", flexWrap: 'wrap'}}>
                   {
                       movies.map( movie => <Poster key={ movie.id } {...movie} navigation={navigation}  /> )
                   }
                </View>
            </ScrollView>
            
        </SafeAreaView>
        
    )
}

export default Grid
