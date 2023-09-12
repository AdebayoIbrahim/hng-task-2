import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
const Form = () => {
  return (
    <>
      <Box component="form">
        <TextField
          id="input"
          variant="outlined"
          placeholder="What Do You Want?"
          sx={{
            borderColor: "white !important",
            borderRadius: "8px",
            width: "450px",
            color: "white !important",
            border: "2px solid white !important",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search sx={{ stroke: "white", fill: "white" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Form;
