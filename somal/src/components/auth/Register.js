import { Button, TextField } from "@mui/material";
import React from "react";
import { RemoveRedEye } from "@mui/icons-material";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/reducer/auth";
const Register = () => {
  const [hide, setHide] = React.useState(true);
  const [hide1, setHide1] = React.useState(true);
  const [data, setData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const history = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      return toast.error("Password does not match");
    }
    dispatch(register({ data, toast, history }));
  };
  React.useEffect(() => {
    if (auth.errors) {
      toast.error(auth.errors.message);
    }
  }, [auth.errors]);
  return (
    <div className="bg-red-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 ">
        <div className="md:w-1/2 px-8 py-15">
          <h2 className="font-bold text-3xl text-[#002D74]">Register</h2>
          <p className="text-2xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              type="text"
              sx={{
                margin: "30px 0",
              }}
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              sx={{
                margin: "0 0 30px 0",
              }}
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
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              <RemoveRedEye
                className="absolute right-0 top-0 mt-5 mr-5 cursor-pointer"
                onClick={() => setHide(!hide)}
              />
            </div>
            <div className="relative mt-[30px]">
              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type={hide1 ? "password" : "text"}
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
              />
              <RemoveRedEye
                className="absolute right-0 top-0 mt-5 mr-5 cursor-pointer"
                onClick={() => setHide1(!hide1)}
              />
            </div>
            <FormLabel
              component="legend"
              className="text-2xs mt-4 text-[#002D74]"
            >
              Sex
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              row
              className="flex justify-between items-center"
            >
              <FormControlLabel
                value="female"
                onChange={handleChange}
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={handleChange}
                sx={{
                  margin: "0px 50px 0px 30px",
                }}
              />
              <FormControlLabel
                value="other"
                onChange={handleChange}
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            {/* </div> */}
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
              Register
            </Button>
          </form>

          <div className="flex">
            <p className="px-2 mt-5">Already have an account? </p>
            <button className="text-[#002D74] mt-5 underline">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <img
            className="rounded-3xl"
            src="https://i.pinimg.com/564x/94/20/ed/9420ed3cfd63b4434cba9659a252abb3.jpg"
            alt="loli"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
