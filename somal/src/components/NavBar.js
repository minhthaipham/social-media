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
  const users = useSelector((state) => state.user.user);
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(searchUser(search));
    }
  };
  return (
    <AppBar position="sticky">
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
              color: "inherit",
            }}
          >
            SUBEN
          </Link>
        </Typography>
        <Castle
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        {/* <Search> */}
        <Autocomplete
          id="country-select-demo"
          sx={{
            width: "40%",
            overflow: "hidden",
            outline: "none",
            height: "45px",
            borderRadius: "10px",
            border: "none",
            // hover: {
            backgroundColor: "white",
            // },
            "&:hover": {
              border: "none",
            },
          }}
          options={users}
          autoHighlight
          getOptionLabel={(option) => option.fullName}
          renderOption={(props, option) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              {...props}
            >
              <Link to={`/profile/${option._id}`}>
                <div className="flex items-center">
                  <Avatar
                    src={option.avatar}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      marginRight: "10px",
                      padding: "5px 10px",
                    }}
                  />
                  <Typography variant="body2" className="ml-2">
                    {option.fullName}
                  </Typography>
                </div>
              </Link>
            </Box>
          )}
          renderInput={(params) => (
            <form onSubmit={handleSubmit}>
              <TextField
                {...params}
                label="Search"
                sx={{}}
                InputProps={{ ...params.InputProps, type: "search" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          )}
        />
        {/* <form onSubmit={handleSubmit}>
            <InputBase
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              fullWidth
            />
          </form> */}
        {/* </Search> */}
        {user?._id ? (
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Icons>
        ) : (
          <Typography variant="h6">
            <Link to="/login">Login</Link>
          </Typography>
        )}
        <UserBox>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
          <Typography variant="h6">John Doe</Typography>
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
              <Avatar className="mr-2" /> Profile
            </MenuItem>
          </Link>
          <MenuItem>
            <Avatar className="mr-2" /> My account
          </MenuItem>
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
