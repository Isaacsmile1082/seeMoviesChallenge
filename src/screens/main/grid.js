import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native'

import { useGetMovies } from '../../hooks/useGetMovies';

const Poster = ({ poster_path,
                  id,
                  navigation,
                  title,
                  overview,
                  vote_average,
                  release_date
            }) => {

    const posterURL = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    
    return (
        <TouchableOpacity style={{ width: '50%', height: 300}} onPress={() => { navigation.navigate('movieInfo', {
            id,
            posterURL,
            title,
            overview,
            vote_average,
            release_date
        }) }}>
          <Image source={{uri:posterURL}}  style={{ width: '100%', height: 300 }}/>
        </TouchableOpacity>
     
    )
}



const grid = ({ navigation }) => {

    const [order, setOrder] = useState('top_rated');
    const [page, setPage] = useState(1);
    
    const movies = useGetMovies(order, page);
    
   
    return (
        <SafeAreaView style={{flex: 1, flexDirection:"row"}}>
            <ScrollView>
                <View style={{flex: 1, flexDirection:"row", flexWrap: 'wrap'}}>
                    
                   {
                       movies.map( movie => <Poster key={ movie.id } {...movie} navigation={navigation}  /> )
                   }
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default grid
