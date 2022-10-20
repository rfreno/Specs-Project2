import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [list, setList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => {
    setList([...list, movie]);
  };

  const removeMovie = (movie) => {
    const newState = list.filter((movTitle) => movTitle !== movie);
    setList(newState);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
