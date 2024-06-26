import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";

function NowPlayingMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchNowPlayingMovie() {
            const response = await axios(ENDPOINTS.NOW_PLAYING());
            setMovies(response.data.results);
        }

        fetchNowPlayingMovie();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Now Playing Movies" />
        </>
    );
}

export default NowPlayingMovie;
