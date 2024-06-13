import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ watchlist, moviesList, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = moviesList.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchlist={true}
              toggleWatchlist={toggleWatchlist}
            />
          );
        })}
      </div>
    </div>
  );
}
