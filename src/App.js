import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/movie";
import { MovieContextProvider } from "./context/movieContext";
const App = () => {
  return (
    <MovieContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id/*" element={<Movie />} />
      </Routes>
    </MovieContextProvider>
  );
};

export default App;
