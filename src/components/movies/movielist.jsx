import React, { useEffect, useState, useContext } from "react";
import { Box, Grid } from "@mui/material";
import Movieitem from "./movieItem";
import Spinner from "../shared/Spinner";
import MovieReducer from "../../context/movieReducers";
const Movielists = () => {
  const [resultarr, setResultarr] = useState([]);
  const [load, setLoad] = useState(true);

  const { movies, loading } = useContext(MovieReducer);

  useEffect(() => {}, []);

  return load ? (
    <Spinner />
  ) : (
    <Box pt={5}>
      <Grid container spacing={5} justifyContent="center">
        {resultarr.map((item, pos) => {
          return <Movieitem key={pos} movies={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Movielists;
