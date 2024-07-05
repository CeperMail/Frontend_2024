import { useEffect, useContext } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";
import MoviesContext from "../../components/context/MoviesContext";

function NowPlayingMovie() {
    const { movies, setMovies } = useContext(MoviesContext);

    useEffect(() => {
        async function fetchNowPlayingMovie() {
            const response = await axios(ENDPOINTS.NOW_PLAYING());
            setMovies(response.data.results);
        }

        fetchNowPlayingMovie();
    }, [setMovies]);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Now Playing Movies" />
        </>
    );
}

export default NowPlayingMovie;
