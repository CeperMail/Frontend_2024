import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {
     
  const[movies, setMovies] = useState([]);
  // Perform side effect: fetch movie
  useEffect(() => {
    async function fetchTopRatedMovies() {

      // Fetch data using axios
      const response = await axios(ENDPOINTS.TOP_RATED);
      setMovies(response.data.results);
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Top Rated" movies = {movies} />
    </div>
  )
}
  
export default TopRatedMovie;
  