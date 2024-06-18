import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie(){
    
  const[movies, setMovies] = useState([]);
  // Perform side effect: fetch movie
  useEffect(() => {
    async function fetchPopularMovies() {
      // Save API KEY and URL popular movie
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      // Fetch data using axios
      const response = await axios(URL);
      setMovies(response.data.results);
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" movies = {movies} />
    </div>
  )
}

export default NowPlayingMovie;