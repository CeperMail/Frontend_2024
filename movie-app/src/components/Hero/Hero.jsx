import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero(){
    // Membuat State movie
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
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title? movie.Title : "Loading..."}</h2>
                    <h3 className={styles.hero__genre}>Genre: {movie.Genre? movie.Genre : "Unknown"}</h3>
                    <p className={styles.hero__description}>{movie.Plot? movie.Plot : "No description available"}</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src={movie.Poster? movie.Poster : ""} alt={movie.Title? movie.Title : ""} />
                </div>
            </section>
        </div>
    )
}

export default Hero;