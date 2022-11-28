import { Button, TextField } from "@mui/material";
import React from "react";
import { Google, RemoveRedEye } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, google } from "../redux/reducer/auth";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
const Login = () => {
  const [hide, setHide] = React.useState(true);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const history = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ data, toast, history }));
  };

  React.useEffect(() => {
    if (auth.errors) {
      toast.error(auth.errors.message);
    }
  }, [auth.errors]);
  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const successGoogle = async (res) => {
    const fullName = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.googleId;
    const tokenId = res.tokenId;

    const data = {
      fullName,
      email,
      googleId,
      tokenId,
    };
    dispatch(google({ data, toast, history }));
  };
  const failureGoogle = (err) => {
    console.log(err);
    console.log("Google Sign In was unsuccessful. Try again later.");
  };
  return (
    <div className="bg-red-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 ">
        <div className="md:w-1/2 px-8 py-15">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-2xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                margin: "30px 0",
              }}
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <div className="relative">
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type={hide ? "password" : "text"}
                value={data.password}
                onChange={handleChange}
                name="password"
              />
              <RemoveRedEye
                className="absolute right-0 top-0 mt-5 mr-5 cursor-pointer"
                onClick={() => setHide(!hide)}
              />
            </div>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                margin: "30px 0",
                bgcolor: "#002D74",
                padding: "10px 0",
                borderRadius: "15px",
              }}
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="grid grid-cols-3 items-center">
            <hr className="border-gray-400" />
            <p className="text-[#002D74] text-center">OR</p>
            <hr className="border-gray-400" />
          </div>

          <GoogleLogin
            clientId="169910068822-vf7ikarblshb3b2t14r2l029f47o233c.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="contained"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Google />}
                sx={{
                  margin: "30px 0",
                  bgcolor: "#DC3535",
                  padding: "10px 0",
                  borderRadius: "15px",
                }}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={successGoogle}
            onFailure={failureGoogle}
            cookiePolicy="single_host_origin"
          />

          <p className="border-b-2 p-2 text-2sm">Forgot password</p>
          <div className="flex">
            <p className="px-2 mt-5">If you don't have an account . Create</p>
            <button className="text-[#002D74] mt-5 underline">
              <Link to="/register">here</Link>
            </button>
          </div>
        </div>
        <div className="w-1/2 hidden md:block ">
          <img
            className="rounded-3xl "
            src="https://i.pinimg.com/564x/33/7a/67/337a673f095b5e083ebd66388cee7045.jpg"
            alt="loli"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
