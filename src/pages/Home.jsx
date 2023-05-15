import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css'
const movieURL = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?${key}`;
    getTopRatedMovies(topRatedUrl);
  }, []);
  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)};
      </div>
    </div>
  );
};

export default Home;
