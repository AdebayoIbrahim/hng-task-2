import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Poster from "../assets/Poster.png";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";
import Form from "../components/Form/form";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          background: `url(${Poster})`,
          width: "100%",
          minHeight: "90vh",
          backgroundSize: "cover",
          padding: "1.2rem 5%",
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
          <Box>
            <Form />
          </Box>
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontSize={16} color="white">
              Sign in
            </Typography>
            <Box>
              {" "}
              <img
                src={Menu}
                alt="menu-bar"
                style={{ width: "30px", height: "30px" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
