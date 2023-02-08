import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import MovieSolo from './pages/MovieSolo/MovieSolo';
import Serie from './pages/Serie/Serie';
import SerieSolo from './pages/SerieSolo/SerieSolo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/series" element={<Serie />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/movie/:id" element={<MovieSolo />} />
        <Route path="/tv/:id" element={<SerieSolo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
