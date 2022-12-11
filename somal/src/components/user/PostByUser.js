// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPost, getPostByUser } from "../../redux/reducer/post";
// import Post from "../post/Post";

// const PostByUser = ({ id }) => {
//   const dispatch = useDispatch();
//   const post = useSelector((state) => state.post.posts);
//   console.log(post);
//   // React.useEffect(() => {
//   //   if (post?.creator._id === id) {
//   //     dispatch(getPostByUser(id));
//   //   }
//   // }, [post, id, dispatch]);
//   React.useEffect(() => {
//     dispatch(getPostByUser(id));
//   }, [dispatch, id]);

//   return (
//     <>
//       {post?.map((post) => (
//         <Post key={post._id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostByUser;
