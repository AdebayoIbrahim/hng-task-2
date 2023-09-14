import React from "react";
import spinner from "../../assets/Ring-rm.gif";
import { Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ margin: "auto", textAlign: "center" }} pt={5}>
      <img
        src={spinner}
        alt="spinner"
        style={{ width: "100px", height: "100px", textAlign: "center" }}
      />
    </Box>
  );
};

export default Spinner;
