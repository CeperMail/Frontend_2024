import {useState} from 'react';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import Form from '../components/Form/Form';
import data from '../utils/constants/data';

const Home = () => {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <main>
        <Hero />
        <Movies movies={movies} />
        <Form movies={movies} setMovies={setMovies} />
      </main>
    </div>
  );
};

export default Home;
