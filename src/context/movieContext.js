import React, { createContext, useReducer } from "react";
import MovieReducer from "./movieReducers";
const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  const initialState = {
    movies: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const api_key = "d2af3cef5640d578a1839a201a48a671";
  const params = new URLSearchParams({
    api_key: api_key,
  });
  const api_url = `https://api.themoviedb.org/3/movie/popular?${params}`;
  //fetching top10 movies
  const fetchMovies = async () => {
    const options = {
      accept: "application/json",
      method: "GET",
    };
    const movieList = await fetch(`${api_url}`, options);
    if (!movieList.ok) {
      alert("Failed To Fetch");
      console.log("Error" + movieList.status);
      return;
    }
    const result = await movieList.json();
    //first 10
    const dataEnd = result.results.slice(0, 10);

    dispatch({
      type: "FETCH_MOVIES_TOP",
      payload: dataEnd,
    });
  };
  //fetching top movies all with see-all button
  const fetchMoviesall = async () => {
    const options = {
      accept: "application/json",
      method: "GET",
    };
    const movieList = await fetch(`${api_url}`, options);
    if (!movieList.ok) {
      alert("Failed To Fetch");
      console.log("Error" + movieList.status);
      return;
    }
    const result = await movieList.json();
    //All
    const dataEnd = result.results;
    dispatch({
      type: "FETCH_MOVIES_ALL",
      payload: dataEnd,
    });
  };

  //search movies
  const searchMovies = async (search) => {};
  return (
    <React.Fragment>
      <MovieContext.Provider
        value={{
          ...state,
          fetchMovies,
          fetchMoviesall,
        }}
      >
        {children}
      </MovieContext.Provider>
    </React.Fragment>
  );
};

export default MovieContext;
