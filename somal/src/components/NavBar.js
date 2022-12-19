import {
  Castle,
  Logout,
  Mail,
  NotificationAdd,
  Notifications,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Autocomplete,
  TextField,
  Divider,
  ListItemIcon,
  Tooltip,
  IconButton,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducer/auth";
import { json, Link, useNavigate } from "react-router-dom";
import { searchUser } from "../redux/reducer/user";
import SearchUser from "./form/SearchUser";
const ThemeToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    history("/login");
  };
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const { users } = useSelector((state) => state.user);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", color: "black" }}>
      <ThemeToolBar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
            className=" from-cyan-500 to-blue-500"
          >
            SUBEN
          </Link>
        </Typography>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
          className=" from-cyan-500 to-blue-500"
        >
          <Castle
            className="text-blue-600"
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          />
        </Link>

        {/* <Search> */}
        <SearchUser />
        {user?._id ? (
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail className="text-blue-600" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications className="text-blue-600" />
            </Badge>
            <Tooltip title={user?.fullName}>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  src={user?.avatar}
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Icons>
        ) : (
          <Typography variant="h6">
            <Link to="/login">Login</Link>
          </Typography>
        )}
        <UserBox>
          <Tooltip title={user?.fullName}>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                src={user?.avatar}
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>
          </Tooltip>
          {/* <Typography variant="h6">
            {user?.fullName.length > 10
              ? user?.fullName.slice(0, 10)
              : user?.fullName}
          </Typography> */}
        </UserBox>
      </ThemeToolBar>
      <div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <Link to={`/profile/${user?._id}`}>
            <MenuItem>
              <Avatar className="mr-2" src={user?.avatar} /> Profile
            </MenuItem>
          </Link>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </AppBar>
  );
};

export default NavBar;
