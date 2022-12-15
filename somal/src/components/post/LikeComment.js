import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const LikeComponent = ({ post, user }) => {
  console.log(post);
  console.log(user);
  return (
    <div>
      <IconButton aria-label="add to favorites">
        {post.likes.find((like) => like === user?._id) ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>
    </div>
  );
};
