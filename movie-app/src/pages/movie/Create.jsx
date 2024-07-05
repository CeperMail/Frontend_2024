import { useContext } from 'react';
import Hero from "../../components/Hero/Hero";
import Form from "../../components/Form/Form";
import MoviesContext from "../../components/context/MoviesContext";

function CreateMovie() {
    const { movies, setMovies } = useContext(MoviesContext);

    return (
        <>
            <Hero />
            <Form movies={movies} setMovies={setMovies} />
        </>
    );
}

export default CreateMovie;
