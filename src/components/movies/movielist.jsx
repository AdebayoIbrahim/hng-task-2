import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Movieitem from "./movieItem";
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
      const dataEnd = result.results;
      setResultarr(dataEnd);
      setLoad(false);
    };
    fetchData();
  }, []);

  return load ? (
    <Typography className="load" component="h3" pt={5}>
      Loading...
    </Typography>
  ) : (
    <Box pt={5}>
      <Grid container spacing={2}>
        {resultarr.map((item, pos) => {
          return <Movieitem key={pos} movies={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Movielists;
