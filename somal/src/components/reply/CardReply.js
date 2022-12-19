import { Avatar, Typography } from "@mui/material";
import React from "react";

const CardReply = ({ posts }) => {
  console.log(posts);
  return (
    <div className="ml-10 mr-3">
      <div className="flex items-center p-2 ">
        <Avatar
          // src={reply?.creator?.avatar}
          sx={{ width: 28, height: 28, mr: 1 }}
        />
        <Typography variant="body2" color="textSecondary">
          {/* {reply?.creator?.fullName} */}
        </Typography>
      </div>
      <div className=" mb-2 p-2 bg-[#F0F2F5] mx-2 rounded-md">
        <p className="text-black">
          {/* {reply?.tag?.fullName} */}
          <span className="ml-2 text-sm text-gray-500">
            {/* {reply?.content} */}
            cc
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardReply;
