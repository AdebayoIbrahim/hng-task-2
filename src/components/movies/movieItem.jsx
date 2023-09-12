import React from "react";
import { Grid, Box } from "@mui/material";
const Movieitem = ({ movies }) => {
  return (
    <>
      <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
        <Box>
          <h2>{movies.original_title}</h2>
          <h2>{movies.id}</h2>
        </Box>
      </Grid>
    </>
  );
};

export default Movieitem;
