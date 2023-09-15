import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Main from "../components/layout/Main";
import { Logout } from "@mui/icons-material";
const Movie = () => {
  return (
    <Box>
      <Stack direction="row" gap={2} sx={{ width: "100%" }}>
        <Box
          sx={{
            background: "white",
            flex: { md: "1.8" },
            width: { sm: "100px", xs: "50px" },
            height: "100vh",
            border: "1px solid rgba(225,225,225,.7)",
            borderRadius: "0 3em 3em 0",
            overflowY: "auto !important",
            overflowX: "hidden !important",
          }}
        >
          <Sidebar />
          <Box
            pl={5}
            pr={5}
            sx={{ display: { xs: "none", sm: "none", lg: "block" } }}
          >
            <Box
              pt={3}
              pb={1}
              sx={{
                border: "2px solid rgba(190, 18, 60, .3)",
                background: "rgba(190, 18, 60, .05)",
                borderRadius: ".8em",
                paddingInline: "1.4rem",
              }}
            >
              <Typography variant="body1" color="black">
                Play movie quizes and earn free tickets
              </Typography>
              <Typography variant="body2" pt={2} color="#666666">
                50k people are playing now
              </Typography>
              <Box
                pt={4}
                textAlign="center"
                sx={{ display: { sm: "none", lg: "block" } }}
              >
                <Typography
                  component="button"
                  variant="contained"
                  sx={{
                    all: "unset",
                    borderRadius: "2rem",
                    background: "rgba(190, 18, 60, .3)",
                    color: "#BE123C",
                    fontSize: "15px",
                    padding: ".4rem .8rem",
                  }}
                >
                  Start Playing
                </Typography>
              </Box>
            </Box>
            <Box pt={4} sx={{ display: { sm: "block", lg: "none" } }}>
              <Logout mr={10} sx={{ fill: "black" }} />
            </Box>
            <Box pt={4} sx={{ display: { sm: "none", lg: "block" } }}>
              <Button
                fontSize={20}
                startIcon={<Logout />}
                sx={{ color: "#666666" }}
              >
                {" "}
                Log Out
              </Button>
            </Box>
          </Box>
        </Box>
        <Box flex="7" sx={{ background: "white", height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/coming" element={<h1>upcoming</h1>}></Route>
          </Routes>
        </Box>
      </Stack>
    </Box>
  );
};

export default Movie;
