import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import Home from './pages/home';
import CreateMovie from './pages/movie/Create';
import PopularMovie from './pages/movie/Popular';
import NowPlayingMovie from './pages/movie/NowPlaying';
import TopRatedMovie from './pages/movie/TopRated';
import Layout from './Layout/index';
import Detail from './pages/movie/Detail';
import data from './utils/constants/data'; 
import MoviesContext from './components/context/MoviesContext';

function App() {
  const [movies, setMovies] = useState(data);

  const contextValue = {
    movies,
    setMovies,
  };

  return (
    <ThemeProvider theme={theme}>
      <MoviesContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/nowplaying" element={<NowPlayingMovie />} />
            <Route path="/movie/toprated" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </MoviesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
