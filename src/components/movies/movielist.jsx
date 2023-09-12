import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
const Movielists = () => {
  const [resultarr, setResultarr] = useState();
  const [load, setLoad] = useState(true);
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
      const dataEnd = result.results;
      setResultarr(dataEnd);
      setLoad(false);
    };
    fetchData();
  }, []);

  return load ? (
    <h3>Loading...</h3>
  ) : (
    <h2>Result gotten!!!!{resultarr.length}</h2>
  );
};

export default Movielists;
