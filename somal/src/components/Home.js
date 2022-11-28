import { Box, Button, createTheme, Stack, ThemeProvider } from "@mui/material";
import SideBar from "./SideBar";
import Feed from "./Feed";
import RightBar from "./RightBar";
import NavBar from "./NavBar";
import Ad from "./Ad";
import React from "react";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducer/auth";
import { useNavigate, useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const [mode, setMode] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  console.log(user);
  React.useEffect(() => {
    const token = user?.token;
    console.log(token);
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        {/* <NavBar /> */}
        {/* <Stack direction="row" spacing={2} justifyContent="space-between"> */}
        <div className="flex justify-between ">
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </div>
        {/* </Stack> */}
        <Ad />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
