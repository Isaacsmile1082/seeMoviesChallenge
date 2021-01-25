import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { Title, ActivityIndicator, Colors  } from 'react-native-paper';
import { useGetDetails } from '../../hooks/useGetDetails';
import AppbarHeader from '../../components/AppbarHeader';
import i18n from 'i18n-js';
import CachedImage from '../../components/CachedImage';
import styles from '../../styles/info';
import { ScrollView } from 'react-native-gesture-handler';


const MovieInfo = ({ route, navigation }) => {

    const { id, posterURL } = route.params;
    const { release_date, vote_average, overview, runtime, genres, title, } = useGetDetails(id);
    
        return (
        <SafeAreaView style={{flex:7}}>
            <ScrollView>
            <AppbarHeader title={'Movie info'} subtitle={ title } navigation={ navigation }/>
            <View style={ styles.titleBackground }>
                <Text style={ styles.title }>{ title }</Text>
            </View>
            <View style={ styles.secondContainer }>
                <CachedImage cacheKey={`${id}`}  source={{uri:posterURL}} style={ styles.cachedImage }/>
                <View style={ styles.thirdContainer }>
                    { !release_date? <ActivityIndicator animating={true} color={Colors.purple100}/> :<Title>{ release_date }</Title> }
                    { !runtime? <ActivityIndicator animating={true} color={Colors.purple100}/> :<Text style={ styles.textRunTime }>{i18n.t('runTime')}{ runtime }</Text>}
                    { !vote_average? <ActivityIndicator animating={true} color={Colors.purple100}/>  :<Text style={ styles.textVote }>{ vote_average }</Text>}
                    { !genres? <ActivityIndicator animating={true} color={Colors.purple100}/>: genres.map( genre => <Text style={styles.textGenre} key={genre.id}>{ genre.name }</Text>) }
                </View>
            </View>
            <View style={ styles.fourthContainer }>
                <Text style={ styles.textOverview }>
                    {overview? overview : i18n.t('emptyOverview')}
                </Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieInfo
