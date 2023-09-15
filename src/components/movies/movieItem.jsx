import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import imdb from "../../assets/imdb.png";
import tomato from "../../assets/tomato.png";
import genreData from "../shared/genreData";
import { Link } from "react-router-dom";
const Movieitem = ({ movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const genreNames = movies.genre_ids.map((genreId) => {
    const genre = genreData.genres.find((genre) => genre.id === genreId);
    return genre && genre.name;
  });

  return (
    <>
      <Grid item xl={2} lg={3} md={4} sm={6} xs={12} data-testid="movie-card">
        <Link to={`/movies/${movies.id}`} style={{ textDecoration: "none" }}>
          <Box>
            <img
              data-testid="movie-poster"
              src={`${baseUrl}${movies.poster_path}`}
              alt="card-box"
              style={{
                width: "100%",
                aspectRatio: "1 / 1.5 ",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack pt={2} direction="column" gap={2}>
            <Typography
              sx={{ color: "#9CA3AF" }}
              variant="caption"
              data-testid="movie-release-date"
            >
              {movies.release_date}
            </Typography>
            <Typography
              fontSize={18}
              fontWeight={700}
              variant="body1"
              component={Link}
              to={`/movies/${movies.id}`}
              color="black"
              sx={{
                textOverflow: "elipsis !important",
                whiteSpace: "nowrap !important",
                overflow: "hidden !important",
                textDecoration: "none",
              }}
              data-testid="movie-title"
            >
              {movies.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" sx={{ color: "black" }}>
                <img src={imdb} alt="imdb" />
                <Typography
                  ml={2}
                  component="span"
                  sx={{ fontSize: "12px", textAlign: "center" }}
                >
                  86.0/100
                </Typography>
              </Stack>
              <Stack direction="row" sx={{ color: "black" }}>
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
            <Typography
              sx={{
                color: "#9CA3AF",
                textOverflow: "elipsis !important",
                whiteSpace: "nowrap !important",
                overflow: "hidden !important",
              }}
              variant="caption"
            >
              {`${genreNames.join(", ")}`}
            </Typography>
          </Stack>
        </Link>
      </Grid>
    </>
  );
};

export default Movieitem;
