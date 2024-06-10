import React, {useState, useEffect} from 'react';
import '../styles.css';

export default function MoviesGrid() {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch('movies.json')
    .then(response => response.json())
    .then(data => {
      setMoviesList(data);
    });
  }, []);

  return (
    <div className='movies-grid'>
        {
            moviesList.map((movie) => {
                return (
                    <div key={movie.id} className='movie-card'>
                    <img src={`images/${movie.img}`} alt={movie.title} />
                    <div className='movie-card-info'>
                        <h3 className='movie-card-title'>{movie.title}</h3>
                        <p className='movie-card-genre'>{movie.genre}</p>
                        <p className='movie-card-rating'>{movie.rating}</p>
                    </div>
                    </div>
                )
            })
        }
    </div>
  );
}