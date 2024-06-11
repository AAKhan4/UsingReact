import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [genres, setGenres] = useState("All Genres");
  const genreMatch = (movie, genres) => {
    return genres === "All Genres" || movie.genre === genres;
  };
  const [ratings, setRatings] = useState("0");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMoviesList(data);
      });
  }, []);

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          >
            <option value="All Genres">All Genres</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantasy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
          >
            <option value="0">All Ratings</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {moviesList
          .filter((movie) => {
            return (
              genreMatch(movie, genres) &&
              movie.rating >= ratings &&
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((movie) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
      </div>
    </div>
  );
}
