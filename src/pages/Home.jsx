import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Poster from "../assets/Poster.png";
import Logo from "../assets/Logo.png";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          background: `url(${Poster})`,
          width: "100%",
          minHeight: "90vh",
          backgroundSize: "cover",
          padding: "1.2rem 8%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <img src={Logo} alt="logo" />
          </Box>
          <Box>Search..</Box>
          <Stack direction="row" gap={2}>
            <Typography variant="body2">Sign in</Typography>
            <Typography variant="caption">Click</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
