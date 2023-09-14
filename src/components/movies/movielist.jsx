import React, { useEffect, useState, useContext } from "react";
import { Box, Grid } from "@mui/material";
import Movieitem from "./movieItem";
import Spinner from "../shared/Spinner";
import MovieContext from "../../context/movieContext";
const Movielists = () => {
  const { movies, loading, fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Box pt={5}>
      <Grid container spacing={5} justifyContent="center">
        {movies.map((item, pos) => {
          return <Movieitem key={pos} movies={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Movielists;
