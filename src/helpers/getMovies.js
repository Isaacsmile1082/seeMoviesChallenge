import axios from 'axios';
import { API_KEY_MOVIES } from '@env';


export const getMovies = async ( orderBy, page ) => {

    const url = `https://api.themoviedb.org/3/movie/${orderBy}?api_key=${API_KEY_MOVIES}&language=en-US&page=${page}`;
    try {
        
        const response = await axios.get(url);
        const { results } = response.data;
        const movies = results.map( resultado => { 
            
            return {
                id: resultado.id,
                poster_path: resultado.poster_path,
                title: resultado.title
            }
        });
        
        return movies;
    } catch (error) {
        console.log(error)
    }
}
