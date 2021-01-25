import React, { useEffect, useState, useRef } from 'react'
import { View, ScrollView, SafeAreaView, Text, Platform , TouchableOpacity, Image, I18nManager } from 'react-native'
import { Button } from 'react-native-paper';
import { useGetMovies } from '../../hooks/useGetMovies';
import Appbar from '../../components/AppbarHeader';
import i18n from 'i18n-js';
import CachedImage from '../../components/CachedImage';
import styles from '../../styles/grid';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 2;
    
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  


const Grid = ({ navigation }) => {

    const [order, setOrder] = useState('top_rated');
    const [page, setPage] = useState(1);
    const prevOrderRef = useRef();
   

 
    useEffect(() => {
       
        prevOrderRef.current = order;
    });

    const prevOrder = prevOrderRef.current;

    const movies = useGetMovies(order, page, prevOrder, setPage);

    return (
        
        <SafeAreaView style={ styles.container }>   
            <ScrollView onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    setTimeout(() => {
                        setPage(page+1);
                    }, 100);
                    
                }
            }}
            scrollEventThrottle={400}
            >
            <Appbar title={'SeeMovies'}  subtitle={ order==='top_rated'? i18n.t('topRated') : i18n.t('popular') } navigation={ navigation }/>
                <View style={ styles.containerBntSort }>
                    
                    <Button mode={order === 'popular'? 'contained' : 'text'}  onPress={() => { setOrder('popular');}}>{ i18n.t('popular') }</Button>
                    <Button mode={order === 'top_rated'? 'contained' : 'text'}  style={styles.btnSort} onPress={() => { setOrder('top_rated');}}>{ i18n.t('topRated') }</Button>
                </View>
                <View style={ styles.containerPost }>
                   {
                       movies.map( movie => <Poster key={ movie.id } {...movie} navigation={navigation}  /> )
                   }
                </View>
            </ScrollView>
        </SafeAreaView>
       
    )
}


export const Poster = ({ poster_path,
                        id,
                        navigation,
                        title,
                        release_date     
                    }) => {

const posterURL = `https://image.tmdb.org/t/p/w342/${poster_path}`;

return (
    <TouchableOpacity style={ styles.poster } onPress={() => { navigation.navigate('MovieInfo', {
        id,
        posterURL,
        })}}>
    <CachedImage source={{uri:posterURL}}  cacheKey={`${id}`} style={ styles.cachedImage }/>
    
    <Text>{title}</Text>
    <Text>{ release_date }</Text>
    </TouchableOpacity>

    )
}


export default Grid
