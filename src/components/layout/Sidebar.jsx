import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Home, LiveTv } from "@mui/icons-material";
import { BiCameraMovie, BiCalendar } from "react-icons/bi";
import Logo from "../../assets/tv.png";
const ListText = styled(ListItemText)({
  color: "black",
  marginLeft: "-20px",
  "&:hover": {
    color: "rgba(190, 18, 60, 1) !important",
  },
});
const Listitem = styled(ListItem)({
  "&:hover": {
    background: "rgba(190, 18, 60, .1) !important",
    color: "rgba(190, 18, 60, 1) !important",
    borderRight: "4px solid rgba(190, 18, 60, 1)",
  },
});
export default function Sidebar() {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={5}
        pr={2}
        pl={2}
        sx={{ display: { sm: "none", md: "flex" } }}
      >
        <img src={Logo} alt="logo" />
        <Typography variant="body2" fontSize={18} color="black">
          Movie Box
        </Typography>
      </Stack>
      <Box pt={4}>
        <List>
          <Listitem disablePadding={true} mt={5} sx={{}}>
            <ListItemButton component={Link} to="/">
              <ListItemIcon sx={{ color: "black" }}>
                <Home sx={{ fontSize: "25px" }} fill="black" />
              </ListItemIcon>
              <ListText primary="Home" />
            </ListItemButton>
          </Listitem>
          <Listitem
            disablePadding={true}
            mt={5}
            sx={{
              background: "rgba(190, 18, 60, .1)",
              borderRight: "4px solid rgba(190, 18, 60, 1)",
            }}
          >
            <ListItemButton component={Link} to="/important">
              <ListItemIcon sx={{ color: "black" }}>
                <BiCameraMovie fontSize="25px" fill="black" />
              </ListItemIcon>
              <ListText
                primary="Movies"
                sx={{ color: "rgb(190, 18, 60, 1)" }}
              />
            </ListItemButton>
          </Listitem>
          <Listitem disablePadding={true} mt={5}>
            <ListItemButton component={Link} to="/planned">
              <ListItemIcon sx={{ color: "black" }}>
                <LiveTv sx={{ fontSize: "25px" }} fill="black" />
              </ListItemIcon>
              <ListText primary="Tv Series" />
            </ListItemButton>
          </Listitem>
          <Listitem disablePadding={true} mt={5}>
            <ListItemButton component={Link} to="/coming">
              <ListItemIcon sx={{ color: "black" }}>
                <BiCalendar fontSize="25px" fill="black" />
              </ListItemIcon>
              <ListText primary="Upcoming" />
            </ListItemButton>
          </Listitem>
        </List>
      </Box>
    </Box>
  );
}
