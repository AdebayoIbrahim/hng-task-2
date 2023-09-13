import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import imdb from "../../assets/imdb.png";
import tomato from "../../assets/tomato.png";
const Movieitem = ({ movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
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
            <Typography variant="caption">{movies.release_date}</Typography>
            <Typography variant="body1">{movies.title}</Typography>
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
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default Movieitem;
