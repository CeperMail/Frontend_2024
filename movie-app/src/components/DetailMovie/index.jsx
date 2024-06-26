import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StyledDetailMovie from "./DetailMovie.styled";
import Button from "../ui/Button/Button";
import ENDPOINTS from "../../utils/constants/endpoints";

function DetailMovie() {
    const params = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() => {
        getDetailMovie();
    }, [params.id]);

    async function getDetailMovie() {
        const response = await axios(ENDPOINTS.MOVIE_DETAIL(params.id));
        setMovie(response.data);
    }

    return (
        <StyledDetailMovie>
            <div className="poster">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                {trailer && <Button size="big" as="a" href={trailer}>Watch</Button>}
            </div>
        </StyledDetailMovie>
    );
}

export default DetailMovie;
