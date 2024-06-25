
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
    POPULAR: () => `${BASE_URL}/movie/popular/?api_key=${API_KEY}`,
    MOVIE_DETAIL: (movieId) => `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
    TOP_RATED: () => `${BASE_URL}/movie/top_rated/?api_key=${API_KEY}`,
    NOW_PLAYING: () => `${BASE_URL}/movie/now_playing/?api_key=${API_KEY}`
};

export default ENDPOINTS;
