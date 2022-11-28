import React from "react";

const UserLikePost = () => {
  return (
    <div>
      {/* {isShown &&
            userLikePost?.map((user) => {
              return (
                <Box
                  key={user?._id}
                  transition="all 0.3s ease"
                  transform={isShown ? "scale(1)" : "scale(0)"}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "200px",
                    height: "200px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                    zIndex: 100,
                  }}
                >
                  <div className="flex items-center p-2">
                    <Avatar src={user?.avatar} />
                    <div className="ml-2">
                      <Typography variant="body2" color="textSecondary">
                        {user?.fullName}
                      </Typography>
                    </div>
                  </div>
                </Box>
              );
            })} */}
    </div>
  );
};

export default UserLikePost;
