import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Edit from "./components/Edit";
import { useDispatch } from "react-redux";
import { getPost } from "./redux/reducer/post";
import decode from "jwt-decode";
import { logout } from "./redux/reducer/auth";

function App() {
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
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
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
