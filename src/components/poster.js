import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper';

const Poster = ({ poster_path, id }) => {

    const posterURL = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    
    return (
        
        <Image source={{uri:posterURL}} style={{ width:'50%', height: 300 }}/>      
    )
}

export default Poster
