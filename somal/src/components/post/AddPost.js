import {
  Add,
  Favorite,
  FavoriteBorder,
  Image,
  Mood,
  SentimentDissatisfied,
  TagFaces,
  ThumbUpAltOutlined,
  VideoChat,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/reducer/post";
const TestModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Ad = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [text, setText] = React.useState({
    content: "",
    images: [],
  });
  const { user } = JSON.parse(localStorage.getItem("profile")) || [];
  const handleClose = () => {
    setOpen(false);
  };
  const handleLike = () => {
    setText(text + "👍");
  };
  const handleLove = () => {
    setText(text + "❤️");
  };
  const handleSad = () => {
    setText(text + "😢");
  };
  const handleSmile = () => {
    setText(text + "😄");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost({
        data: {
          ...text,
          creator: user,
          createdAt: new Date().toISOString(),
        },
      })
    );
    setText({
      content: "",
      images: [],
    });
    setOpen(false);
  };
  return (
    <>
      <Tooltip
        title="Add post"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <TestModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box
            borderRadius={5}
            height={280}
            width={400}
            p={2}
            bgcolor={"background.default"}
            color="text.primary"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              Create Post
            </Typography>
            <TextField
              id="standard-basic"
              placeholder="What's on your mind?"
              variant="standard"
              fullWidth
              multiline
              rows={2}
              value={text.content}
              onChange={(e) => setText({ ...text, content: e.target.value })}
            />
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <FileBase
                type="file"
                multiple={true}
                onDone={(newFile) => {
                  setText({ ...text, images: [...text.images, ...newFile] });
                }}
              />
            </Stack>

            <Stack direction="row" gap={2} my={2}>
              <IconButton onClick={handleLike}>
                <ThumbUpAltOutlined color="primary" />
              </IconButton>
              <IconButton onClick={handleLove}>
                <Favorite className="text-red-500" />
              </IconButton>
              <IconButton onClick={handleSad}>
                <SentimentDissatisfied className="text-[#FFE15D]" />
              </IconButton>
              <IconButton onClick={handleSmile}>
                <TagFaces className="text-[#F49D1A]" />
              </IconButton>

              <IconButton>
                <Image color="success" />
              </IconButton>
              <IconButton>
                <VideoChat color="warning" />
              </IconButton>
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: "70%",
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
                type="submit"
              >
                Post
              </Button>
            </Box>
          </Box>
        </form>
      </TestModal>
    </>
  );
};

export default Ad;
