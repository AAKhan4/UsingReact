import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMoviesList(data);
      });
  }, []);

  return (
    <div className="movies-grid">
      {moviesList.map((movie) => {
        return <MovieCard movie={movie} key={movie.id}></MovieCard>;
      })}
    </div>
  );
}