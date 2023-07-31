import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TMDB_API_KEY } from '../tmdbApiKey';
import '../styles/PopularTV.css';

const PopularTV = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_original_language=en&with_original_language_include_null=false&origin_country=US&sort_by=popularity.desc`
        );
        setTVShows(response.data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className="popular-tv">
      <h2>Popular TV Shows</h2>
      <div className="tv-list">
        {tvShows.map((tvShow) => (
          <div className="tv-show" key={tvShow.id}>
            <img
              className="tv-poster"
              src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
              alt={tvShow.name}
            />
            <p className="tv-title" title={tvShow.name}>{tvShow.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTV;