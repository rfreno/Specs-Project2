import React from "react";
import MovieCard from "./MovieCard";
import './Watchlist.css'

const Watchlist = ({ list, removeMovie }) => {
  const movieDisplay = list.map((movie, index) => {
    return (<MovieCard movie={movie} removeMovie={removeMovie} list={list} />);
  });
  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      <div className="movie-container-watchlist">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
