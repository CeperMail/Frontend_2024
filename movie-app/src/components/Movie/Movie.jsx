import StyledMovie from "./Movie.styled";

function Movie(props) {
  const { movie } = props;

  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.year || movie.release_date;

  return (
    <StyledMovie>
      <img 
        src={movie.poster || tmdbImage}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
  );
}

export default Movie;
