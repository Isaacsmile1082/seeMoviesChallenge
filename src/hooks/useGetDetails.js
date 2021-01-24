import React, { useEffect, useState } from 'react';
import { getMovieDetail } from '../helpers/getMovies';

export const useGetDetails = (id) => {

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getMovieDetail(id)
            .then( movieDB => {
                setMovie(movieDB)
            })
            .catch(e => console.log(e));        
       
    }, []);
   
    
    return movie;

}