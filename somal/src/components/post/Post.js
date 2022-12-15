import React from "react";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Delete,
  Edit,
  EmojiEmotions,
  Favorite,
  FavoriteBorder,
  MoreVert,
  NotificationsNone,
  Settings,
  Share,
  SmsFailed,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card as CardMui,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  Input,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../redux/reducer/user";
import {
  likePost,
  getUserLikePost,
  deletePost,
  getPost,
} from "../../redux/reducer/post";
import { LikePost } from "./LikePost";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";
import CardComment from "./CardComment";
import { getComment } from "../../redux/reducer/comment";
const Post = ({ posts, user }) => {
  //   const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const { userLikePost } = useSelector((state) => state.post);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hide, setHide] = React.useState(true);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(likePost({ ...posts, id: posts._id }));
  };

  const [isShown, setIsShown] = React.useState(false);
  // React.useEffect(() => {
  //   if (!isShown) {
  //     dispatch(getUserLikePost({ id: posts?._id }));
  //   }
  // }, [isShown]);
  const handleShowUserLikePost = () => {
    setIsShown(!isShown);
    dispatch(getUserLikePost({ id: posts?._id }));
  };

  const handleHide = () => {
    setHide(!hide);
  };
  // const handleShowUserLikePost = React.useCallback(() => {
  //   setIsShown(!isShown);
  //   dispatch(getUserLikePost({ id: posts?._id }));
  // }, [isShown]);
  const handleGetUser = () => {
    // console.log(posts?.creator._id);
    dispatch(getUserById(posts?.creator._id));
    if (posts?.creator._id !== user._id) {
      navigate(`/profile/${posts?.creator._id}`);
    } else {
      navigate("/profile");
    }
  };
  const handleDeletePost = () => {
    if (posts?.creator?._id === user?._id) {
      dispatch(deletePost({ id: posts?._id }));
    } else {
      alert("You can not delete this post");
    }
  };
  return (
    <CardMui sx={{ margin: "15px 0px" }}>
      <CardHeader
        className="bg-gray-100"
        avatar={
          <Avatar
            src={posts?.creator?.avatar}
            className="cursor-pointer"
            onClick={handleGetUser}
          />
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreVert />
          </IconButton>
        }
        title={posts?.creator?.fullName}
        subheader={moment(posts?.createdAt).fromNow()}
      />
      {open && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem>
            <Edit className="text-gray-500 mr-2" /> Edit
          </MenuItem>
          <Divider />
          <MenuItem>
            <Share className="text-gray-500 mr-2" /> Share
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleDeletePost}>
            <Delete className="text-gray-500 mr-2" /> Delete
          </MenuItem>
          <Divider />
          <MenuItem>
            <BookmarkBorder className="text-gray-500 mr-2" /> Lưu bài viết
          </MenuItem>
          <Divider />
          <MenuItem>
            <NotificationsNone className="text-gray-500 mr-2" /> Bật thông báo
            về bài viết này
          </MenuItem>
        </Menu>
      )}
      <div>
        {posts?.images.map((img) => {
          return (
            <div key={img.name}>
              <img
                src={img.base64}
                alt="profile"
                className=" w-full object-cover cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <CardActions disableSpacing>
        <div onClick={handleLike}>
          <IconButton aria-label="add to favorites">
            {posts?.likes.find((like) => like === user?._id) ? (
              <Favorite color="error" />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </div>
        <div className="flex-grow">
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </div>
        <div className="  ">
          {/* <IconButton aria-label="share"> */}
          {/* <ChatBubbleOutline /> */}
          <p className="text-gray-500 cursor-pointer" onClick={handleHide}>
            {posts?.comments.length} Comment
          </p>
          {/* </IconButton> */}
        </div>
      </CardActions>
      <CardContent
        sx={{
          paddingTop: 0,
        }}
      >
        {/* <Typography
        className=" hover:cursor-pointer "
        onClick={showUserLikePost}
      > */}
        <div
          // onMouseEnter={handleShowUserLikePost}
          // onMouseLeave={() => setIsShown(false)}
          // onClick={handleShowUserLikePost}
          className=" hover:cursor-pointer w-fit overflow-hidden relative"
        >
          <LikePost posts={posts} user={user} />
        </div>
        {/* </Typography> */}
        <Typography variant="h6" color="text.secondary">
          {posts?.content}
        </Typography>
      </CardContent>
      {/* <div>
      <p
        className="mx-5 mb-2 hover:cursor-pointer "
        onClick={showUserLikePost}
      >
        <Likes />
      </p>
    </div> */}
      {/* <CardComment posts={posts} /> */}
      <div className={hide ? "hidden" : "block"}>
        {/* {hide
        ? posts?.comments.map((comment) => (
            <CardComment key={comment?._id} comment={comment} />
          ))
        : null} */}
        {posts?.comments.map((comment) => (
          <CardComment key={comment?._id} comment={comment} />
        ))}
      </div>
      <Divider />
      <Comment posts={posts} setHide={setHide} />
    </CardMui>
  );
};

export default Post;
