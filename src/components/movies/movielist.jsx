import React, { useEffect, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Movieitem from "./movieItem";
import Spinner from "../shared/Spinner";
import MovieContext from "../../context/movieContext";
import { Link } from "react-router-dom";
const Movielists = () => {
  const { movies, loading, fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);
  const back = () => {
    fetchMovies();
  };
  return loading ? (
    <Spinner />
  ) : (
    <Box pt={5}>
      <Grid container spacing={5} justifyContent="center">
        {movies.length >= 1 ? (
          movies.map((item, pos) => <Movieitem key={pos} movies={item} />)
        ) : (
          <Box mt={8} textAlign="center">
            <Typography>You are all caught up! Nothing to display.</Typography>
            <Button mt={2} onClick={back} to="/">
              Back To Featured
            </Button>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Movielists;
