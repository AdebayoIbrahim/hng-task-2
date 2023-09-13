import React from "react";
import { Box, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
const Movie = () => {
  const params = useParams();
  return (
    <Box>
      <Stack direction="row" gap={2} sx={{ width: "100%" }}>
        <Box
          flex="1.8"
          sx={{
            background: "white",
            height: "100vh",
            border: "1px solid rgba(225,225,225,.7)",
            borderRadius: "0 3em 3em 0",
          }}
        >
          <Sidebar />
        </Box>
        <Box flex="7" sx={{ background: "white", height: "100vh" }}></Box>
      </Stack>
    </Box>
  );
};

export default Movie;
