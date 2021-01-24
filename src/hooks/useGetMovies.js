import React, { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';




export const useGetMovies = ( orderBy, page, order ) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    


    useEffect(() => { 
        getMovies(orderBy, page)
            .then( movie => {
                setTimeout(() => {
                    setMovies(movies.concat(movie))
                }, 1000); 
            })
            .catch(e => console.log(e));
            
           
    }, [page])

    useEffect(() => { 
        getMovies(orderBy, page)
            .then( movie => {
                setTimeout(() => {
                    setMovies([]);
                        setTimeout(() => {
                            setMovies(movie)
                        }, 500);
                }, 500); 
            })
            .catch(e => console.log(e));   
            
    }, [orderBy])
    


    return movies;
}