import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import Card from "./post/Card";
import { useSelector, useDispatch } from "react-redux";
import Post from "./post/Post";
const Feed = () => {
  const { posts } = useSelector((state) => state.post) || [];
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  // console.log(posts);
  const { loading } = useSelector((state) => state.post) || [];
  return (
    <Box flex={3} p={2}>
      {/* {loading ? (

      ) : (
        posts.map((posts) => <Card posts={posts} key={posts?._id} />)
      )
      } */}
      {posts.map((posts) => (
        <Post posts={posts} user={user} key={posts?._id} loading={loading} />
      ))}
    </Box>
  );
};

export default Feed;
