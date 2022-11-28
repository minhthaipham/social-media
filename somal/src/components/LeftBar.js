import {
  AccountBox,
  Article,
  Drafts,
  Group,
  Home,
  Nightlight,
  PersonAdd,
  Send,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import Ad from "./post/AddPost";

const SideBar = ({ mode, setMode }) => {
  return (
    // <Box
    //   flex={1}
    //   p={2}
    //   // sx={{
    //   //   display: { xs: "none", sm: "block" },
    //   // }}
    // >
    <div className="flex-1 p-2">
      <Box position="fixed">
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="HomePage" className="hidden  md:block" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" className="hidden md:block" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Group" className="hidden md:block" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Market" className="hidden md:block" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="Friend" className="hidden md:block" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" className="hidden md:block" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" className="hidden md:block" />
          </ListItemButton>
          <ListItemButton
            onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
          >
            <ListItemIcon>
              <Nightlight />
            </ListItemIcon>
            {/* <Switch
                defaultChecked
                // sx={{
                //   display: { xs: "none", sm: "block" },
                // }}
              /> */}
            <div className="hidden md:block">
              <Switch defaultChecked />
            </div>
          </ListItemButton>
        </List>
      </Box>
    </div>
    // </Box>
  );
};

export default SideBar;
