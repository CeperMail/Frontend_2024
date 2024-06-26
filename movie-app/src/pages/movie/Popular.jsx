import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchPopularMovie() {
            const response = await axios(ENDPOINTS.POPULAR());
            setMovies(response.data.results);
        }

        fetchPopularMovie();
    }, []);

    return (
        <>
            <Hero />
            <Movies movies={movies} title="Popular Movies" />
        </>
    );
}

export default PopularMovie;
