import React, { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';

export const useGetMovies = ( orderBy, page, pelis ) => {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => { 
        
        getMovies(orderBy, page)
            .then( movie => {
                setTimeout(() => {
                    setMovies(movie)
                }, 1000); 
            })
            .catch(e => console.log(e));        
        
    }, [page, orderBy])

    return movies;
}