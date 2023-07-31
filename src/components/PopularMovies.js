import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TMDB_API_KEY } from '../tmdbApiKey';
import '../styles/PopularMovies.css';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="popular-movies">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movie-title" title={movie.title}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
