import { Avatar, Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { likeComment, replyComment } from "../../redux/reducer/post";
const CardComment = ({ comment }) => {
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const posts = useSelector((state) => state.post) || [];
  const [reply, setReply] = React.useState(false);
  const [textReply, setTextReply] = React.useState("");
  const [newReply, setNewReply] = React.useState([]);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(likeComment({ ...comment, id: comment._id }));
  };
  // console.log(comment);
  const handleReply = () => {
    setReply(!reply);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReply = {
      content: textReply,
      tag: comment?.creator,
      reply: comment?._id,
    };
    dispatch(
      replyComment({
        ...comment,
        id: comment?.postId,
        data: newReply,
      })
    );
    setTextReply("");
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
        </div>
      </div>
      <div className="flex ml-2">
        <p className="text-1xs text-gray-500 ">
          {moment(comment?.createdAt).fromNow()}
        </p>

        <p
          className="text-1xs text-black font-bold cursor-pointer ml-2"
          onClick={handleReply}
        >
          {reply ? "Cancel" : "Reply"}
        </p>
      </div>
      <div>
        {reply && (
          <div className="ml-10 mr-3 relative">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded-md p-2 outline-none"
                placeholder={`@${comment?.creator?.fullName}`}
                value={textReply}
                onChange={(e) => setTextReply(e.target.value)}
              />

              <button
                type="submit"
                className="absolute top-[50%] right-0 translate-y-[-50%] mr-2"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
    // </Box>
  );
};

export default CardComment;
