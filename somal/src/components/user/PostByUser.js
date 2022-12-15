// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPost, getPostByUser } from "../../redux/reducer/post";
// import Post from "../post/Post";
// import {
//   Avatar,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Card as CardMui,
//   Divider,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   BookmarkBorder,
//   Delete,
//   Edit,
//   FavoriteBorder,
//   MoreVert,
//   NotificationsNone,
//   Share,
// } from "@mui/icons-material";
// const PostByUser = () => {
//   const open = Boolean(anchorEl);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     //     <CardMui sx={{ margin: "15px 0px" }}>
//     //       <CardHeader
//     //         className="bg-gray-100"
//     //         avatar={
//     //           <Avatar
//     //             src="https://i.pinimg.com/236x/1e/7e/93/1e7e933cd8bff079f341755865519304.jpg"
//     //             className="cursor-pointer"
//     //             //   onClick={handleGetUser}
//     //           />
//     //         }
//     //         action={
//     //           <IconButton
//     //             aria-label="settings"
//     //             //   onClick={handleClick}
//     //             //   aria-controls={open ? "account-menu" : undefined}
//     //             //   aria-haspopup="true"
//     //             //   aria-expanded={open ? "true" : undefined}
//     //           >
//     //             <MoreVert />
//     //           </IconButton>
//     //         }
//     //         //   title={posts?.creator?.fullName}
//     //         //   subheader={moment(posts?.createdAt).fromNow()}
//     //         title="Nguyễn Văn A"
//     //         subheader="1 giờ trước"
//     //       />
//     //       {open && (
//     //         <Menu
//     //           //   anchorEl={anchorEl}
//     //           //   id="account-menu"
//     //           //   open={open}
//     //           //   onClose={handleClose}
//     //           //   onClick={handleClose}
//     //           transformOrigin={{ horizontal: "right", vertical: "top" }}
//     //           anchorOrigin={{ horizontal: "right", vertical: "top" }}
//     //         >
//     //           <MenuItem>
//     //             <Edit className="text-gray-500 mr-2" /> Edit
//     //           </MenuItem>
//     //           <Divider />
//     //           <MenuItem>
//     //             <Share className="text-gray-500 mr-2" /> Share
//     //           </MenuItem>
//     //           <Divider />
//     //           <MenuItem>
//     //             <Delete className="text-gray-500 mr-2" /> Delete
//     //           </MenuItem>
//     //           <Divider />
//     //           <MenuItem>
//     //             <BookmarkBorder className="text-gray-500 mr-2" /> Lưu bài viết
//     //           </MenuItem>
//     //           <Divider />
//     //           <MenuItem>
//     //             <NotificationsNone className="text-gray-500 mr-2" /> Bật thông báo
//     //             về bài viết này
//     //           </MenuItem>
//     //         </Menu>
//     //       )}
//     //       <div>
//     //         {/* {posts?.images.map((img) => {
//     //         return ( */}
//     //         <div>
//     //           <img
//     //             src="https://i.pinimg.com/236x/ce/ed/64/ceed645333d38f111ce23c0943d842df.jpg"
//     //             alt="profile"
//     //             className=" w-full object-cover cursor-pointer"
//     //           />
//     //         </div>
//     //         {/* );
//     //       })} */}
//     //       </div>
//     //       <CardActions disableSpacing>
//     //         <div>
//     //           {/* <IconButton aria-label="add to favorites">
//     //           {posts?.likes.find((like) => like === user?._id) ? (
//     //             <Favorite color="error" />
//     //           ) : (
//     //              <FavoriteBorder />
//     //           )}
//     //         </IconButton> */}
//     //           <FavoriteBorder />
//     //         </div>
//     //         <div className="flex-grow">
//     //           <IconButton aria-label="share">
//     //             <Share />
//     //           </IconButton>
//     //         </div>
//     //         <div className="  ">
//     //           {/* <IconButton aria-label="share"> */}
//     //           {/* <ChatBubbleOutline /> */}
//     //           {/* <p className="text-gray-500 cursor-pointer" onClick={handleHide}>
//     //           {posts?.comments.length} Comment
//     //         </p> */}
//     //           {/* </IconButton> */}
//     //         </div>
//     //       </CardActions>
//     //       <CardContent
//     //         sx={{
//     //           paddingTop: 0,
//     //         }}
//     //       >
//     //         {/* <Typography
//     //       className=" hover:cursor-pointer "
//     //       onClick={showUserLikePost}
//     //     > */}
//     //         <div
//     //           // onMouseEnter={handleShowUserLikePost}
//     //           // onMouseLeave={() => setIsShown(false)}
//     //           // onClick={handleShowUserLikePost}
//     //           className=" hover:cursor-pointer w-fit overflow-hidden relative"
//     //         >
//     //           {/* {isShown &&
//     //         userLikePost?.map((user) => {
//     //           return (
//     //             <Box
//     //               key={user?._id}
//     //               transition="all 0.3s ease"
//     //               transform={isShown ? "scale(1)" : "scale(0)"}
//     //               sx={{
//     //                 position: "absolute",
//     //                 top: 0,
//     //                 right: 0,
//     //                 width: "200px",
//     //                 height: "200px",
//     //                 backgroundColor: "white",
//     //                 borderRadius: "5px",
//     //                 boxShadow: "0 0 10px rgba(0,0,0,0.5)",
//     //                 zIndex: 100,
//     //               }}
//     //             >
//     //               <div className="flex items-center p-2">
//     //                 <Avatar src={user?.avatar} />
//     //                 <div className="ml-2">
//     //                   <Typography variant="body2" color="textSecondary">
//     //                     {user?.fullName}
//     //                   </Typography>
//     //                 </div>
//     //               </div>
//     //             </Box>
//     //           );
//     //         })} */}
//     //           {/* <Likes /> */}
//     //           {/* <LikePost posts={posts} user={user} /> */}
//     //         </div>
//     //         {/* </Typography> */}
//     //         {/* <Typography variant="h6" color="text.secondary">
//     //         {posts?.content}
//     //       </Typography> */}
//     //       </CardContent>
//     //       {/* <div>
//     //     <p
//     //       className="mx-5 mb-2 hover:cursor-pointer "
//     //       onClick={showUserLikePost}
//     //     >
//     //       <Likes />
//     //     </p>
//     //   </div> */}
//     //       {/* <CardComment posts={posts} /> */}
//     //       {/* <div className={hide ? "hidden" : "block"}> */}
//     //       {/* {hide
//     //       ? posts?.comments.map((comment) => (
//     //           <CardComment key={comment?._id} comment={comment} />
//     //         ))
//     //       : null} */}
//     //       {/* {posts?.comments.map((comment) => (
//     //         <CardComment key={comment?._id} comment={comment} />
//     //       ))} */}
//     //       {/* </div> */}
//     //       <Divider />
//     //       {/* <Comment posts={posts} setHide={setHide} /> */}
//     //     </CardMui>
//   );
// };

// export default PostByUser;
