import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Movieitem from "./movieItem";
import Spinner from "../shared/Spinner";
const Movielists = () => {
  const [resultarr, setResultarr] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const api_key = "d2af3cef5640d578a1839a201a48a671";
    const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
    const fetchData = async () => {
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
      setResultarr(dataEnd);
      setLoad(false);
    };
    fetchData();
  }, []);

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
