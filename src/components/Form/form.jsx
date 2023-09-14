import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
const Form = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Box component="form">
        <TextField
          id="input"
          variant="outlined"
          placeholder="What Do You Want?"
          value={value}
          onChange={handleChange}
          sx={{
            borderColor: "white !important",
            borderRadius: "8px",
            width: { md: "400px", lg: "50ppx", sm: "300px", xl: "700px" },
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
