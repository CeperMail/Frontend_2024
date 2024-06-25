import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import axios from "axios";



function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchRecommendedMovies() {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const params = `?api_key=${API_KEY}&append_to_response=videos`;
                const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations${params}`;
                const response = await axios.get(URL);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching recommended movies:", error);
            }
        }

        fetchRecommendedMovies();
    }, [id]);

    return (
        <>
            <DetailMovie />
            <Movies movies={movies} title="Recommended Movies" />
        </>
    );
}

export default Detail;
