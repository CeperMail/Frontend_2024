import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie(){
    
  const[movies, setMovies] = useState([]);
  // Perform side effect: fetch movie
  useEffect(() => {
    async function fetchNowPlayingMovies() {
      // Fetch data using axios
      const response = await axios(ENDPOINTS.NOW_PLAYING);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" movies = {movies} />
    </div>
  )
}

export default NowPlayingMovie;