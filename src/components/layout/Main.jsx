import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
const Main = () => {
  const params = useParams();

  useEffect(() => {
    const api_key = "d2af3cef5640d578a1839a201a48a671";
    const api_url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_key}`;
    const fetchMovie = async () => {
      const options = {
        accept: "application/json",
        method: "GET",
      };

      const movieData = await fetch(`${api_url}`, options);
      if (!movieData.ok) {
        alert("Failed To Fetch");
        console.log("Error" + movieData.status);
        return;
      }
      const result = await movieData.json();
      console.log(result);
    };
    fetchMovie();
  }, []);
  return (
    <React.Fragment>
      <Box pt={8} pr={4}>
        <Box></Box>
      </Box>
    </React.Fragment>
  );
};

export default Main;
