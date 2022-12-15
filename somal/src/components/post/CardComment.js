import { Avatar, Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { likeComment } from "../../redux/reducer/post";
import { LikePost } from "./LikePost";
import { LikeComponent } from "./LikeComment";
const CardComment = ({ comment }) => {
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const userLikeComment = useSelector((state) => state.post.userLikeComment);
  // console.log(userLikeComment);
  // console.log(typeof userLikeComment.likes);
  // console.log(comment);
  // console.log(user);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(likeComment({ ...comment, id: comment._id }));
  };
  return (
    <div className="mx-2 mb-2">
      <div className="flex items-center p-2 ">
        <Avatar
          src={comment?.creator?.avatar}
          sx={{ width: 28, height: 28, mr: 1 }}
        />
        <Typography variant="body2" color="textSecondary">
          {comment?.creator?.fullName}
        </Typography>
      </div>
      <div className="flex items-center justify-between p-2 bg-[#F0F2F5] mx-2 rounded-md">
        <p className="text-xl text-gray-500">{comment?.content}</p>

        <div onClick={handleClick}>
          <IconButton aria-label="add to favorites">
            {comment?.likes?.find((like) => like === user?._id) ? (
              <Favorite color="error" />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
          {/* <LikeComponent post={comment} user={user} /> */}
          {/* <Checkbox
            // icon={<FavoriteBorder />}
            // checkedIcon={<Favorite color="error" />}
            icon={like ? <Favorite color="error" /> : <FavoriteBorder />}
            checkedIcon={like ? <Favorite color="error" /> : <FavoriteBorder />}
          /> */}
        </div>
      </div>
      <div className="flex ml-2">
        <p className="text-1xs text-gray-500 ">
          {moment(comment?.createdAt).fromNow()}
        </p>
        {/* <p className="text-1xs text-black mx-2 font-bold cursor-pointer">
          {comment?.likes.length > 2
            ? `You and ${comment?.likes.length - 1} others`
            : `${comment?.likes.length} like${
                comment?.likes.length > 1 ? "s" : ""
              }`}
        </p> */}
        <p className="text-1xs text-black font-bold cursor-pointer ml-2">
          reply
        </p>
      </div>
    </div>
    // </Box>
  );
};

export default CardComment;
