import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/movie";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </>
  );
};

export default App;
