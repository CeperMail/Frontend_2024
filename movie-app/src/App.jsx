import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import CreateMovie from './pages/movie/Create';
import PopularMovie from './pages/movie/Popular';
import NowPlayingMovie from './pages/movie/NowPlaying';
import TopRatedMovie from './pages/movie/TopRated';
import Layout from '../src/Layout/index';
import Detail from './pages/movie/Detail';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
