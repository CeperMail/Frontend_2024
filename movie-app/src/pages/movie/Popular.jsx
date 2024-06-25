import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";


function PopularMovie() {
  const[movies, setMovies] = useState([]);
  // Perform side effect: fetch movie
  useEffect(() => {
    async function fetchPopularMovies() {
   
      // Fetch data using axios
      const response = await axios(ENDPOINTS.POPULAR);
      setMovies(response.data.results);
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" movies = {movies} />
    </div>
  )
}

export default PopularMovie;