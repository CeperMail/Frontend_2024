import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      try {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.Title ? movie.Title : "Loading..."}</h2>
          <h3>Genre: {movie.Genre ? movie.Genre : "Unknown"}</h3>
          <p>{movie.Plot ? movie.Plot : "No description available"}</p>
          <Button variant="primary" size="big" full>Watch</Button>
        </div>
        <div>
          <img className="hero__image" src={movie.Poster ? movie.Poster : ""} alt={movie.Title ? movie.Title : ""} />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
