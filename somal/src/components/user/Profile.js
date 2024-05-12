import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Divider, Modal, styled, Tab, Tabs } from "@mui/material";
import {
  followUser,
  getUserById,
  unFollowUser,
} from "../../redux/reducer/user";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Card from "../post/Card";
import { clearId, getPost, getPostByUser } from "../../redux/reducer/post";
import Post from "../post/Post";
import PostByUser from "./PostByUser";
import Test from "./Test";
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.background.paper,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  boxShadow: 24,
  borderRadius: "10px",
};
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [post, setPost] = React.useState([]);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.user);
  // console.log(users);
  const { user } = JSON.parse(localStorage.getItem("profile"));
  // console.log(user);
  const handleBtn = () => {
    if (user._id === id) {
      navigate(`/edit/${id}`);
    }
  };
  const handleFollow = () => {
    dispatch(followUser(id));
  };
  React.useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
      // dispatch(getPostByUser(id));
    }
    // getUserById finish then clear id
  }, [dispatch, id]);

  React.useEffect(() => {
    return () => {
      dispatch(clearId());
    };
  }, [dispatch]);

  // React.useEffect(() => {
  //   // setPost(dispatch(getPostByUser(id)));
  //   setPost((prev) => [...prev, dispatch(getPostByUser(id))]);
  // }, [dispatch, id]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-20 px-2">
        <div className="md:mr-20 mr-10 ">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <img
                  src={users?.avatar}
                  alt="avatar"
                  className="w-full h-full mx-auto object-cover rounded-[10px] "
                />
              </div>
            </Box>
          </Modal>
          <img
            src={users?.avatar}
            alt="profile"
            onClick={handleOpen}
            className="md:w-40 md:h-40 w-[120px] h-[120px] rounded-full object-cover cursor-pointer "
          />
        </div>
        <div>
          <div className="flex items-center ">
            <h1
              className="mr-20 md:text-2xl text-lg
            text-gray-700 "
            >
              {users.fullName}
            </h1>
            {user?._id === users?._id ? (
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                onClick={handleBtn}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Edit Profile
                </span>
              </button>
            ) : (
              <button
                className="
          relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800
          "
                onClick={handleFollow}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {users?.followers?.includes(user?._id)
                    ? "Unfollow"
                    : "Follow"}
                </span>
              </button>
            )}
          </div>
          <div className="flex justify-between my-5">
            <p>6 posts</p>
            <p>1k followers</p>
            <p>1k following</p>
          </div>
          <p>{users?.address}</p>
          <p>{users?.email}</p>
          <p className="text-base">Story :{users?.story}</p>
          <a
            href={users?.website}
            className="hover:text-sky-500"
            target="_blank"
            rel="noreferrer"
          >
            {users?.website}
          </a>
        </div>
      </div>
      <Divider
        sx={{
          width: "80%",
          margin: "20px auto",
        }}
      />
      <div className="mx-auto w-[80%]">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
            className=" flex justify-center "
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Posts" value="1" />
              <Tab label="Images" value="2" />
              <Tab label="List friend" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" className=" flex justify-between">
            <Test />
            <Test />
            <Test />
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <div className="grid grid-cols-3 gap-5">
              <img
                src="https://i.pinimg.com/564x/69/ee/25/69ee25c1f22fd4f337abf76c54a372cb.jpg"
                alt="profile"
                className="w-full h-[300px] object-cover"
              />
              <img
                src="https://i.pinimg.com/564x/69/ee/25/69ee25c1f22fd4f337abf76c54a372cb.jpg"
                alt="profile"
                className="w-full h-[300px] object-cover"
              />
              <img
                src="https://i.pinimg.com/564x/69/ee/25/69ee25c1f22fd4f337abf76c54a372cb.jpg"
                alt="profile"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Profile;
