import React from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/Profile";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Edit from "./components/user/Edit";
import { useDispatch } from "react-redux";
import { getPost } from "./redux/reducer/post";
import { getUserById } from "./redux/reducer/user";
import { io } from "socket.io-client";
import SocketClient from "./socketClient";
import { setSocket } from "./redux/reducer/socket";
import TestData from "./TestData";
function App() {
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const dispatch = useDispatch();
  const [sket, setSket] = React.useState(null);
  // const socket = useSelector((state) => state.socket);
  console.log(sket);
  React.useEffect(() => {
    dispatch(getPost());
    // const socket = io("http://localhost:5000");
    // setSket(socket);
  }, [dispatch]);

  React.useEffect(() => {
    if (user) {
      dispatch(getUserById(user?._id));
    }
  }, [dispatch, user]);

  const Check = ({ children }) => {
    if (!user) {
      toast.error("Please Login First");
      return <Navigate replace to="/login" />;
    }
    return children;
  };
  // React.useEffect(() => {
  //   if (sket) {
  //     sket.emit("join", user?._id);
  //   }
  // }, [sket, user]);
  return (
    <BrowserRouter>
      <NavBar />
      {/* <SocketClient /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/login"
          // element={user ? <Navigate replace to="/home" /> : <Login />}
          element={<Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/test" element={<TestData />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
