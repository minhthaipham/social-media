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
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.user);
  const { user } = JSON.parse(localStorage.getItem("profile"));
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
    }
  }, [dispatch, id]);
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
            // src="https://i.pinimg.com/564x/69/ee/25/69ee25c1f22fd4f337abf76c54a372cb.jpg"
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
            {/* <Button
            variant="outlined"
            color="primary"
            sx={{ height: "35px" }}
            onClick={handleBtn}
          >
            {user?._id === users?._id
              ? "Edit Profile"
              : users?.followers?.includes(user?._id)
              ? "Unfollow"
              : "Follow"}
          </Button> */}
            {/* <button
              className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full 
          "
              onClick={handleBtn}
            >
              {user?._id === users?._id
                ? "Edit Profile"
                : users?.followers?.includes(user?._id)
                ? "Unfollow"
                : "Follow"}
            </button> */}
            {user?._id === users?._id ? (
              <button
                className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full 
          "
                onClick={handleBtn}
              >
                Edit Profile
              </button>
            ) : (
              <button
                className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full 
          "
                onClick={handleFollow}
              >
                {users?.followers?.includes(user?._id) ? "Unfollow" : "Follow"}
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
          <p className="text-base">{users?.story}</p>
          <a href={users?.website} className="hover:text-sky-500">
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
          <TabPanel value="1">cc</TabPanel>
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
