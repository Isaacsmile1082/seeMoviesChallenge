import React, { useEffect, useState, useRef } from 'react';
import { getMovies } from '../helpers/getMovies';


export const useGetMovies = ( orderBy, page, prevOrder, setPage ) => {

    const [movies, setMovies] = useState([]);
    
    
    useEffect(() => {
        
        if(orderBy !== prevOrder){
            
            getMovies(orderBy, 1)
             .then( moviesAPI => {
                 setMovies([])
                 setTimeout(() => {
                    setMovies(moviesAPI)
                 }, 200);
                 prevOrder = orderBy;
             })
             .catch( e => console.log(e))
        } else if(orderBy === prevOrder) {
            getMovies(orderBy, page)
            .then( moviesAPI => {
                setTimeout(() => {
                    setMovies(movies.concat(moviesAPI))
                }, 0);
                
            })
            .catch( e => console.log(e))
        }
        
    }, [page, orderBy])
    
    


    return movies;
}