import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../components/context/MoviesContext";

function TopRatedMovie() {
    const { movies, setMovies } = useContext(MoviesContext);

    useEffect(() => {
        async function fetchTopRatedMovies() {
            const response = await axios(ENDPOINTS.TOP_RATED());
            setMovies(response.data.results);
        }

        fetchTopRatedMovies();
    }, [setMovies]);

    return (
        <div>
            <Hero />
            <Movies title="Top Rated" movies={movies} />
        </div>
    );
}

export default TopRatedMovie;
