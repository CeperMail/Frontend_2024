import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchTrendingMovies() {
        console.log("Fetching trending movies...");
        const response = await axios.get(ENDPOINTS.TRENDING());
        const firstMovie = response.data.results[0];
        return firstMovie;
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const response = await axios.get(ENDPOINTS.MOVIE_DETAIL(trendingMovie.id));
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  const genres = movie && movie.genres ? movie.genres.map((genre) => genre.name).join(", ") : "Unknown";
  const idTrailer = movie && movie.videos && movie.videos.results.length > 0 ? movie.videos.results[0].key : "";

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.title ? movie.title : "Loading..."}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview ? movie.overview : "No description available"}</p>
          {idTrailer && (
            <Button
              as="a"
              href={`https://www.youtube.com/watch?v=${idTrailer}`}
              target="_blank"
              variant="primary"
              size="big"
              full
            >
              Watch Movie
            </Button>
          )}
        </div>
        <div>
          <img
            className="hero__image"
            src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : ""}
            alt={movie.title ? movie.title : ""}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
