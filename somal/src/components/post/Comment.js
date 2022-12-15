import { EmojiEmotions } from "@mui/icons-material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../redux/reducer/post";
const Comment = ({ posts, setHide }) => {
  const [content, setContent] = React.useState("");
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      const newComment = {
        content,
        likes: [],
        creator: users,
      };
      dispatch(createComment({ id: posts?._id, data: newComment }));
      setContent("");
      setHide(false);
    }
  };
  return (
    <div className="flex items-center p-2 relative">
      <EmojiEmotions className="text-gray-500 mr-2" />
      {/* <Typography variant="body2" color="textSecondary"> */}
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Viết bình luận..."
          className="w-full outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-[50%] right-0 translate-y-[-50%] mr-2"
        >
          Send
        </button>
      </form>
      {/* </Typography> */}
    </div>
  );
};

export default Comment;
