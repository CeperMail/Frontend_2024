import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import CreateMovie from './pages/movie/Create';
import PopularMovie from './pages/movie/Popular';
import NowPlayingMovie from './pages/movie/NowPlaying';
import TopRatedMovie from './pages/movie/TopRated';
import Layout from '../src/Layout/index';
// import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <>
      {/* <Counter/> */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/Create" element={<CreateMovie />}></Route>
            <Route path="/movie/Popular" element={<PopularMovie />}></Route>
            <Route path="/movie/NowPlaying" element={<NowPlayingMovie />}></Route>
            <Route path="/movie/TopRated" element={<TopRatedMovie />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;