import Movie from "../Movie/Movie.jsx";
import styles from "./Movies.module.css";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext.jsx";


function Movies(props) {

  const {title = "Latest Movies"} = props;

  const {movies} = useContext(MoviesContext);

  return (
    <div className={styles.container}> 
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title || "Latest Movie"}</h2>
        <div className={styles.movie__container}>
          {
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)
          }
        </div>
      </section>
    </div>
  );
}

export default Movies;
