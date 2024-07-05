import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import { useContext } from 'react';
import  MovieContext from '../components/context/MoviesContext';

function Home () {

  const { movies } = useContext(MovieContext);

  return (
    <div>
      <main>
        <Hero />
        <Movies movies={movies} title="Latest Movies" />
      </main>
    </div>
  );
}

export default Home;
