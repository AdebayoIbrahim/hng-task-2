import React, { useEffect } from "react";
import { Box } from "@mui/material";
const Movielists = () => {
  const api_key = "d2af3cef5640d578a1839a201a48a671";

  const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        accept: "application/json",
        method: "GET",
      };
      const movieList = await fetch(`${api_url}`, options);
      const result = await movieList.json();
      console.log(result);
    };
    fetchData();
  }, []);
  return <Box>Movielists</Box>;
};

export default Movielists;
