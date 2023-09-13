import React from "react";
import { Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
const Movie = () => {
  const params = useParams();
  return (
    <Box>
      <h1>{params.id}</h1>
    </Box>
  );
};

export default Movie;
