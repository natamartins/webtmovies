import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Serie from './pages/Serie/Serie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/series" element={<Serie />} />
        {/* <Route path="/search" element={<Search />} /> */}
        {/* <Route path="/movie/:id" element={<MovieSolo />} /> */}
        {/* <Route path="/tv/:id" element={<TvSeriesSolo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
