import React from "react";

import Post from "./Post";
const Card = ({ posts }) => {
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];

  return <Post posts={posts} user={user} />;
};

export default Card;
