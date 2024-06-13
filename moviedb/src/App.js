import "./App.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMoviesList(data);
      });
  }, []);

  const toggleWatchlist = (mID) => {
    setWatchlist((prev) =>
      prev.includes(mID) ? prev.filter((id) => id !== mID) : [...prev, mID]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  moviesList={moviesList}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  moviesList={moviesList}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
