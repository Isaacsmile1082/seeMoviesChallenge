import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Poster = ({poster_path, id}) => {

    const posterURL = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    
    return (
        <TouchableOpacity style={{ width: '50%', height: 300}}>
          <Image source={{uri:posterURL}}  style={{ width: '100%', height: 300 }}/>
        </TouchableOpacity>
     
    )
}

export default Poster
