import React from "react";
import { Grid, Box, Stack } from "@mui/material";
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
          <Stack></Stack>
        </Box>
      </Grid>
    </>
  );
};

export default Movieitem;
