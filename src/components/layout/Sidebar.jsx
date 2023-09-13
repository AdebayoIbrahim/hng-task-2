import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
  Badge,
} from "@mui/material";
import { Link, to } from "react-router-dom";

const ListText = styled(ListItemText)({
  color: "white",
  marginLeft: "-20px",
});
const Listitem = styled(ListItem)({
  borderRadius: "5px",
  "&:hover": { background: "rgb(61 56 56 / .8)" },
});
export default function Sidebar() {
  return (
    <Box
      pl={0.6}
      pr={0.6}
      pt={7}
      sx={{
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-5px",
          width: "100%",
          left: 0,
          height: "1px",
          background: "rgba(225,225,225,.7)",
        },
      }}
    >
      <List>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon sx={{ color: "white" }}>
              <FaSun fontSize="16px" fill="cyan" />
            </ListItemIcon>
            <ListText primary="My Day" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/important">
            <ListItemIcon sx={{ color: "white" }}>
              <FaStar fontSize="16px" fill="#ebda0b" />
            </ListItemIcon>
            <ListText primary="Important" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/planned">
            <ListItemIcon sx={{ color: "white" }}>
              <FaPaperclip fontSize="16px" fill="#1de11a" />
            </ListItemIcon>
            <ListText primary="Planned" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/assigned">
            <ListItemIcon sx={{ color: "white" }}>
              <FaPersonBooth fontSize="16px" fill="#f74f0f" />
            </ListItemIcon>
            <ListText primary="Assigned to me" />
          </ListItemButton>
        </Listitem>
        <Listitem disablePadding={true} mt={2}>
          <ListItemButton component={Link} to="/tasks">
            <ListItemIcon sx={{ color: "white" }}>
              <FaHome fontSize="16px" fill="#215ce1" />
            </ListItemIcon>
            <ListText primary="Tasks" />
          </ListItemButton>
        </Listitem>
      </List>
    </Box>
  );
}
