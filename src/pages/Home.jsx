import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Poster from "../assets/Poster.png";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { PlayCircle } from "@mui/icons-material";
import Form from "../components/Form/form";
import Movielists from "../components/movies/movielist";
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
        <Box
          pt={15}
          sx={{ maxWidth: "500px", textAlign: "left", color: "white" }}
        >
          <Box>
            <Typography fontSize={45}>John Wick 3:</Typography>
            <Typography fontSize={45}>Parabellum</Typography>
          </Box>
          <Box pt={1.5}>
            <Stack direction="row" alignItems="center" gap={4}>
              <Stack direction="row">
                <img src={imdb} alt="imdb" />
                <Typography
                  ml={2}
                  component="span"
                  sx={{ fontSize: "12px", textAlign: "center" }}
                >
                  86.0/100
                </Typography>
              </Stack>
              <Stack direction="row">
                <img src={tomato} alt="imdb" />
                <Typography
                  ml={2}
                  component="span"
                  sx={{ fontSize: "12px", textAlign: "center" }}
                >
                  97%
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box pt={1.5}>
            <Typography
              variant="span"
              sx={{ maxWidth: "100px", fontSize: "15px" }}
            >
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </Typography>
          </Box>
          <Box pt={1.5}>
            <Button
              startIcon={<PlayCircle />}
              pt={6}
              pb={16}
              pl={16}
              pr={16}
              variant="contained"
              sx={{ background: "#BE123C", borderRadius: "6px" }}
            >
              Watch Trailer
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "1.2rem 5%", color: "black" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" fontSize={36} fontWeight={700}>
            Featured Movie
          </Typography>
          <Typography
            color="#BE123C"
            fontSize={14}
            variant="caption"
            fontWeight={500}
          >
            See more &gt;
          </Typography>
        </Stack>
        <Movielists />
      </Box>
    </>
  );
};

export default Home;
