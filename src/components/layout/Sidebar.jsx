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
        sx={{ display: { sm: "none" } }}
      >
        <img src={Logo} alt="logo" />
        <Typography variant="body2" fontSize={18} color="black">
          Movie Box
        </Typography>
      </Stack>
      <Box
        pt={4}
        // sx={{
        //   position: "relative",
        //   "&:after": {
        //     content: '""',
        //     position: "absolute",
        //     bottom: "-5px",
        //     width: "100%",
        //     left: 0,
        //     height: "1px",
        //     background: "rgba(225,225,225,.7)",
        //   },
        // }}
      >
        <List>
          <Listitem disablePadding={true} mt={5}>
            <ListItemButton component={Link} to="/">
              <ListItemIcon sx={{ color: "black" }}>
                <Home fontSize="16px" fill="black" />
              </ListItemIcon>
              <ListText primary="Home" />
            </ListItemButton>
          </Listitem>
          <Listitem disablePadding={true} mt={5}>
            <ListItemButton component={Link} to="/important">
              <ListItemIcon sx={{ color: "black" }}>
                <BiCameraMovie fontSize="16px" fill="black" />
              </ListItemIcon>
              <ListText primary="Movies" />
            </ListItemButton>
          </Listitem>
          <Listitem disablePadding={true} mt={5}>
            <ListItemButton component={Link} to="/planned">
              <ListItemIcon sx={{ color: "black" }}>
                <LiveTv fontSize="16px" fill="black" />
              </ListItemIcon>
              <ListText primary="Tv Series" />
            </ListItemButton>
          </Listitem>
          <Listitem disablePadding={true} mt={5}>
            <ListItemButton component={Link} to="/coming">
              <ListItemIcon sx={{ color: "black" }}>
                <BiCalendar fontSize="16px" fill="black" />
              </ListItemIcon>
              <ListText primary="Upcoming" />
            </ListItemButton>
          </Listitem>
        </List>
      </Box>
    </Box>
  );
}
