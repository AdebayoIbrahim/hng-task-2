import React, { useState, useEffect, useContext } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
// import Poster from "../assets/Poster.png";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import {
  PlayCircle,
  Facebook,
  YouTube,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import Form from "../components/Form/form";
import Movielists from "../components/movies/movielist";
import MovieContext from "../context/movieContext";
const Home = () => {
  const { fetchMoviesall, onSearch, SearchVal, clearMovies } =
    useContext(MovieContext);
  const [movieInf, setMovieinf] = useState([]);
  const [bg, setBg] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/original";
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
        alert("Network Error");
        console.log("Error" + movieList.status);
        return;
      }
      const result = await movieList.json();
      const movieIdsToFilter = [
        "968051",
        "603692",
        "335977",
        "734253",
        "990140",
        "1008042",
        "569094",
        "346698",
        "385687",
      ];
      //random 5
      const dataEnd = result.results.filter((item) =>
        movieIdsToFilter.includes(item.id.toString())
      );
      const random = dataEnd[Math.floor(Math.random() * dataEnd.length)];
      setMovieinf(random);
      setBg(`${baseUrl}${random.backdrop_path}`);
    };
    fetchData();
    const interval = setInterval(fetchData, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);
  //see more function
  const seeMore = () => {
    fetchMoviesall();
  };
  //clear function
  const clearData = () => {
    window.confirm("Did You Wish To Clear Your tasks") && clearMovies();
  };
  return (
    <>
      <Box
        sx={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          width: "100%",
          minHeight: "90vh",
          backgroundRepeat: "no-repeat",
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
            <Typography fontSize={45}>{movieInf.original_title}</Typography>
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
              {movieInf.overview}
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
      <Box sx={{ padding: "2rem 5%", color: "black" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" fontSize={36} fontWeight={700}>
            {onSearch ? `Serach results for '${SearchVal}'` : "Featured Movie"}
          </Typography>
          <Typography
            color="#BE123C"
            fontSize={14}
            variant="caption"
            sx={{ cursor: "pointer" }}
            fontWeight={500}
            onClick={onSearch ? clearData : seeMore}
          >
            {onSearch ? "Clear" : "See more >"}
          </Typography>
        </Stack>
        <Movielists />
        <Stack
          pt={15}
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          <Stack direction="row" gap={3}>
            <Facebook />
            <Instagram />
            <Twitter />
            <YouTube />
          </Stack>

          <Stack direction="row" gap={4}>
            <Typography fontSize={15} fontWeight={700}>
              Condition of Use
            </Typography>
            <Typography fontSize={15} fontWeight={700}>
              Privacy &amp; Policy
            </Typography>
            <Typography fontSize={15} fontWeight={700}>
              Press Room
            </Typography>
          </Stack>
          <Typography variant="body1" color="#9CA3AF">
            &copy;
            {`${new Date().getFullYear()}MovieBox by Abdulmumeen Ibrahim Adebayo  `}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
