import Movie from "../Movie/Movie.jsx";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data.js";
import {nanoid}  from 'nanoid';
import { useState } from "react";

function Movies (){

    const [movies, setMovies] = useState(data);

    function handleClick(){ 
        const newMovie = {
            id: nanoid(),
            title: "Siksa Kubur",
            year: "2024",
            type: "Movie",
            poster: "https://upload.wikimedia.org/wikipedia/id/b/bf/Poster_Siksa_Kubur.jpg"
        }
        setMovies([...movies,newMovie])
    }

    return (
        <div className={styles.container}> 
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {
                        movies.map((movie) => {return <Movie key={movie.id} movie={movie}/>})
                    }
                </div>
                <button onClick={handleClick} className={styles.more_btn}>Add Movie</button>
            </section>
        </div>
    )
}

export default Movies