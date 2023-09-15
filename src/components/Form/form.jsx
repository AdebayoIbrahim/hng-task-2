import React, { useState, useContext } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import MovieContext from "../../context/movieContext";
const Form = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const { searchMovies, inputResult } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "" || value.trim().length < 1) {
      alert("Search can't be Empty");
      return;
    } else {
      searchMovies(value);
      // alert("good to go");
      //input value
      inputResult(value);
      setValue("");
    }
  };
  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{ display: { sm: "none", md: "block" } }}
      >
        <TextField
          id="input"
          variant="outlined"
          placeholder="What Do You Want?"
          value={value}
          onChange={handleChange}
          sx={{
            borderColor: "white !important",
            borderRadius: "8px",
            width: { md: "400px", lg: "500px", sm: "400px", xl: "700px" },
            transform: {
              xs: "translate(-50%,-50%)",
              sm: "none",
            },

            position: { xs: "absolute", sm: "initial" },
            left: { xs: "50%" },
            top: { xs: "15%" },
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
