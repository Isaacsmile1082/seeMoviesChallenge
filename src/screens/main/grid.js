import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, SafeAreaView, Text } from 'react-native'
import  Poster from '../../components/Poster';
import { useGetMovies } from '../../hooks/useGetMovies';


const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };


const grid = () => {

    const [order, setOrder] = useState('top_rated');
    const [page, setPage] = useState(1);
    
    const movies = useGetMovies(order, page);

   
    return (
        <SafeAreaView style={{flex: 1, flexDirection:"row"}}>
            <ScrollView onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    setPage(page+1);
                  }
            }}>
                <View style={{flex: 1, flexDirection:"row", flexWrap: 'wrap'}}>
                   {
                       movies.map( movie => <Poster key={ movie.id } { ...movie } /> )
                   }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default grid
