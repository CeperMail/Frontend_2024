import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchRecommendedMovies() {
                const response = await axios.get(ENDPOINTS.RECOMMENDATIONS(id));
                console.log("Response received:", response);
                setMovies(response.data.results);
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