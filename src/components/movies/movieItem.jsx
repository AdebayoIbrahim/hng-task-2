import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import imdb from "../../assets/imdb.png";
import tomato from "../../assets/tomato.png";
const Movieitem = ({ movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const genreData = {
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 36,
        name: "History",
      },
      {
        id: 27,
        name: "Horror",
      },
      {
        id: 10402,
        name: "Music",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10749,
        name: "Romance",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 10770,
        name: "TV Movie",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 10752,
        name: "War",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
  };

  const genreNames = movies.genre_ids.map((genreId) => {
    const genre = genreData.genres.find((genre) => genre.id === genreId);
    return genre && genre.name;
  });

  return (
    <>
      <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
        <Box>
          <Box>
            <img
              src={`${baseUrl}${movies.backdrop_path}`}
              alt="card-image"
              style={{
                width: "100%",
                aspectRatio: "1 / 1.5 ",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack pt={2} direction="column" gap={2}>
            <Typography sx={{ color: "#9CA3AF" }} variant="caption">
              {movies.release_date}
            </Typography>
            <Typography
              fontSize={18}
              fontWeight={700}
              variant="body1"
              sx={{
                textOverflow: "elipsis !important",
                whiteSpace: "nowrap !important",
                overflow: "hidden !important",
              }}
            >
              {movies.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
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
            <Typography sx={{ color: "#9CA3AF" }} variant="caption">
              {`${genreNames.join(", ")}`}
              Adventure
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default Movieitem;
