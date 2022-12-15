import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followingUser, getAllUser } from "../redux/reducer/user";
const RightBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { user: users } = JSON.parse(localStorage.getItem("profile")) || [];
  React.useEffect(() => {
    if (users?._id) {
      dispatch(getAllUser(users?._id));
    }
  }, [dispatch, users?._id]);

  const handleFollow = (id) => {
    dispatch(followingUser(id));
  };
  const handleGetUser = (id) => {
    navigate(`/profile/${id}`);
  };
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width="30%">
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={4} sx={{ marginTop: "10px" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Suggestions for you
        </Typography>
        {
          // user.map((item) => (
          //   <div className="flex items-center justify-between">
          //     <div className="flex items-center">
          //       <Avatar
          //         alt="Remy Sharp"
          //         sx={{ width: 75, height: 75 }}
          //         src={item.avatar}
          //       />
          //       <img
          //         src={item.avatar}
          //         className="w-20 h-20 rounded-full object-cover my-2 cursor-pointer"
          //         alt="image4"
          //       />
          //       <span className="mx-2">{item.fullName}</span>
          //     </div>
          //     <div>
          //       <Button>Follow</Button>
          //     </div>
          //   </div>
          // ))
          user.map((item) => (
            <div className="flex items-center justify-between" key={item._id}>
              <div className="flex items-center">
                <img
                  src={item.avatar}
                  className="w-[50px] h-[50px] rounded-full object-cover my-2 cursor-pointer"
                  alt="image4"
                  onClick={() => handleGetUser(item._id)}
                />
                <span className="mx-2">{item.fullName}</span>
              </div>
              <div>
                <button
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  onClick={() => handleFollow(item._id)}
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {item.followers?.includes(users._id)
                      ? "Unfollow"
                      : "Follow"}
                  </span>
                </button>
              </div>
            </div>
          ))
        }
      </Box>
    </Box>
  );
};

export default RightBar;
