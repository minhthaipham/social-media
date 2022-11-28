import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width="30%">
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={4} sx={{ marginTop: "10px" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Latest Images
        </Typography>
        <ImageList
          sx={{ width: "100%", height: "100%", marginTop: "10px" }}
          cols={3}
          rowHeight={100}
          gap={8}
        >
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
              alt="image"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
              alt="image"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
              alt="image"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/564x/6c/52/ad/6c52ad8998c502c4816a3d95308c7b84.jpg"
              alt="image"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default RightBar;
