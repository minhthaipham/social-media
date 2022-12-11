import { Box } from "@mui/material";
import React from "react";
import Card from "./post/Card";
import { useSelector, useDispatch } from "react-redux";
const Feed = () => {
  const { posts } = useSelector((state) => state.post) || [];
  // console.log(posts);

  return (
    <Box flex={3} p={2}>
      {posts.map((posts) => (
        <Card posts={posts} key={posts?._id} />
      ))}
    </Box>
  );
};

export default Feed;
