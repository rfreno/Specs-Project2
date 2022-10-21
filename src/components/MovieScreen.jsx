import React from "react";
import MovieCard from "./MovieCard";
import './MovieScreen.css'

const MovieScreen = ({ addMovie, movieList, page, setPage, list, removeMovie}) => {
    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} addMovie={addMovie} list={list} removeMovie={removeMovie}/>
    })

    const decrement = () => setPage(page - 1)
    const increment = () => setPage(page + 1)

    return (
        <div className="page">
            <h1>Bek's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                <h2>Movie List (Page {page})</h2>
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen