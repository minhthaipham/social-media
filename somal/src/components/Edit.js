import { Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { editUserById } from "../redux/reducer/user";
import { ArrowBack } from "@mui/icons-material";
const Edit = () => {
  const [data, setData] = React.useState({
    avatar: "",
    fullName: "",
    mobile: "",
    address: "",
    story: "",
    website: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = JSON.parse(localStorage.getItem("profile"));
  // const users = useSelector((state) =>
  //   id ? state.user.authData.find((p) => p._id === id) : null
  // );
  const { users } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (users) setData(users);
  }, [users]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserById({ id: user._id, data, navigate }));
  };

  return (
    <div className="bg-red-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-2xl p-5 ">
        <div className="md:w-full px-8 py-15">
          <ArrowBack
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/profile")}
          />
          <form onSubmit={handleSubmit}>
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-[150px] h-[150px] rounded-full mx-auto mb-2 object-cover"
            />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setData({ ...data, avatar: base64 })}
            />
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
              label="Mobile"
              variant="outlined"
              fullWidth
              type="text"
              sx={{
                margin: "30px 0",
              }}
              name="mobile"
              value={data.mobile}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              type="text"
              sx={{
                margin: "30px 0",
              }}
              name="address"
              value={data.address}
              onChange={handleChange}
            />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Tell us about yourself"
              name="story"
              value={data.story}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-lg w-full p-2 hover:border-gray-400 focus:outline-none focus:border-gray-400"
            />
            <TextField
              label="Website"
              variant="outlined"
              fullWidth
              type="text"
              sx={{
                margin: "30px 0",
              }}
              name="website"
              value={data.website}
              onChange={handleChange}
            />
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
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
