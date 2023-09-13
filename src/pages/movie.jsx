import React from "react";
import { Box, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
const Movie = () => {
  const params = useParams();
  return (
    <Box>
      <Stack direction="row" gap={2} sx={{ width: "100%" }}>
        <Box flex="1.8" sx={{ background: "yellow", height: "100vh" }}>
          <Sidebar />
        </Box>
        <Box flex="7" sx={{ background: "red", height: "100vh" }}></Box>
      </Stack>
    </Box>
  );
};

export default Movie;
