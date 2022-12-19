import { Typography } from "@mui/material";

export const LikePost = ({ posts, user }) => {
  if (posts?.likes.length === 0) {
    return (
      <Typography variant="body2" color="textSecondary" component="p">
        {posts && " Be the first to like this"}
      </Typography>
    );
  } else {
    return posts?.likes.find((like) => like === user?._id) ? (
      <div>
        &nbsp;
        {posts?.likes.length > 2
          ? `You and ${posts?.likes.length - 1} others`
          : `${posts?.likes.length} like${posts?.likes.length > 1 ? "s" : ""}`}
      </div>
    ) : (
      <div>
        &nbsp;{posts?.likes.length}{" "}
        {posts?.likes.length === 1 ? "Like" : "Likes"}
      </div>
    );
  }
};
