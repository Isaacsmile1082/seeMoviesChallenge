import axios from 'axios';
import { API_KEY_MOVIES } from '@env';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export const getMovies = async ( orderBy, page ) => {

    const url = `https://api.themoviedb.org/3/movie/${orderBy}?api_key=${API_KEY_MOVIES}&language=${i18n.locale}&page=${page}`;
    
    try {
            
        const response = await axios.get(url);
        const { results } = response.data;
        const movies = results.map( resultado => { 
            
            
            return {
                id: resultado.id,
                poster_path: resultado.poster_path,
                title: resultado.title,
                vote_average: resultado.vote_average,
                overview: resultado.overview,
                release_date: resultado.release_date
            }
        });
        
        return movies;
    } catch (error) {
        console.log(error); //handleError;
    }
}

export const getMovieDetail = async (id) => {

    const url = `https://api.themoviedb.org/3/movie/${ id }?api_key=${ API_KEY_MOVIES }&language=${i18n.locale}`;

    try {
        
        const response = await axios.get(url);
        return response.data;
            
    } catch (error) {
        console.log(error); // handle Error
    }
}

