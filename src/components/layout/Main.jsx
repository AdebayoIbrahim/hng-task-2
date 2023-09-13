import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import Watch from "../../assets/watch.png";
import genreData from "../shared/genreData";
const Main = () => {
  const [moviearr, setMoviearr] = useState(null);
  const [spin, setSpin] = useState(true);
  const params = useParams();

  //image url
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const api_key = "d2af3cef5640d578a1839a201a48a671";
    const api_url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_key}`;

    const fetchMovie = async () => {
      const options = {
        accept: "application/json",
        method: "GET",
      };

      const movieData = await fetch(`${api_url}`, options);
      if (!movieData.ok) {
        alert("Failed To Fetch");
        console.log("Error" + movieData.status);
        return;
      }
      const result = await movieData.json();
      console.log(result);
      setSpin(false);
      setMoviearr(result);
    };
    fetchMovie();
  }, []);

  return (
    <React.Fragment>
      <Box pt={5} pr={4}>
        {spin ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                height: "60vh",
                background: `url(${baseUrl}${moviearr.backdrop_path})`,
                backgroundSize: "cover",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Box
                  sx={{
                    background: "rgb(255 255 255 / .3)",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <img
                    src={Watch}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </Box>
                <Typography
                  fontWeight={500}
                  variant="body2"
                  pt={2}
                  color="white"
                >
                  Watch Trailer
                </Typography>
              </Box>
            </Box>
            <Stack
              pt={2}
              pl={2}
              pr={2}
              direction="row"
              justifyContent="space-between"
              color="black"
            >
              <Stack direction="row" gap={1}>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                  data-testid="movie-title"
                >
                  {moviearr.original_title}
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                >
                  .
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                  data-testid="movie-release-date"
                >
                  {moviearr.release_date}
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                >
                  .
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                >
                  {moviearr.adult ? "PG-18" : "PG-13"}
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                >
                  .
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                  data-testid="movie-runtime"
                >
                  {`${moviearr.runtime}m`}
                </Typography>
                <Typography
                  fontWeight={600}
                  variant=" = body1"
                  fontFamily="poppins"
                >
                  {/* {`${genreNames.join(", ")}`} */}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              pt={2}
              pl={2}
              pr={2}
              direction="row"
              justifyContent="space-between"
            >
              <Typography
                fontFamily="poppins"
                fontWeight={500}
                color="black"
                sx={{ maxWidth: "60ch" }}
                variant="body2"
                data-testid="movie-overview"
              >{`${moviearr.overview}`}</Typography>
              <Stack direction="column" gap={1}>
                <Button
                  variant="contained"
                  sx={{
                    padding: "1.2rem, 9rem",
                    background: "rgba(190, 18, 60, 1)",
                    color: "white",
                  }}
                >
                  See Showtimes
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    padding: "1.2rem, 9rem",
                    background: "rgba(190, 18, 60, .2)",
                    color: "rgba(190, 18, 60, 1)",
                  }}
                >
                  More watch options
                </Button>
              </Stack>
            </Stack>
          </>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Main;
