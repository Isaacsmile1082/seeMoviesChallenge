import React, { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';

export const useGetMovies = ( orderBy, page ) => {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => { 

        getMovies(orderBy, page)
            .then( movie => {
                setTimeout(() => {
                    setMovies(movie);
                }, 500);
                
            },[page, orderBy])        
        
    })

    return movies;
}