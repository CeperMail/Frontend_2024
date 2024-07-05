import { useEffect, useContext } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";
import MoviesContext from "../../components/context/MoviesContext";

function PopularMovie() {
    const { movies, setMovies } = useContext(MoviesContext);

    useEffect(() => {
        async function fetchPopularMovie() {
            const response = await axios(ENDPOINTS.POPULAR());
            setMovies(response.data.results);
        }

        fetchPopularMovie();
    }, [setMovies]);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Popular Movies" />
        </>
    );
}

export default PopularMovie;
