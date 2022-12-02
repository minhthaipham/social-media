import { Avatar, Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { likeComment } from "../../redux/reducer/post";
const CardComment = ({ comment }) => {
  console.log(comment);
  const dispatch = useDispatch();
  const [like, setLike] = React.useState(false);
  const handleClick = () => {
    // console.log(comment?._id);
    dispatch(likeComment({ id: comment._id, data: comment.content }));
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
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
        </div>
      </div>
      <div className="flex ml-2">
        <p className="text-1xs text-gray-500 ">
          {moment(comment?.createdAt).fromNow()}
        </p>
        <p className="text-1xs text-black mx-2 font-bold">0 likes</p>
        <p className="text-1xs text-black font-bold">0 replies</p>
      </div>
    </div>
    // </Box>
  );
};

export default CardComment;
