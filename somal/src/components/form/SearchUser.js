import {
  Autocomplete,
  Avatar,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../../redux/reducer/user";
const SearchUser = () => {
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(searchUser(search));
    }
  };
  return (
    <Autocomplete
      id="combo-box-demo"
      disablePortal
      sx={{
        width: "40%",
        overflow: "hidden",
        outline: "none",
        height: "45px",
        borderRadius: "20px",
        border: "none",
        // hover: {
        backgroundColor: "white",
        // },
        "&:hover": {
          border: "none",
        },
      }}
      options={users}
      getOptionLabel={(option) => option.fullName}
      renderOption={(props, option) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          {...props}
        >
          <Link to={`/profile/${option._id}`}>
            <div className="flex items-center">
              <Avatar
                src={option.avatar}
                sx={{
                  width: 50,
                  height: 50,
                  objectFit: "cover",
                  marginRight: "10px",
                  padding: "5px 10px",
                }}
              />
              <Typography variant="body2" className="ml-2">
                {option.fullName}
              </Typography>
            </div>
          </Link>
        </Box>
      )}
      renderInput={(params) => (
        <form onSubmit={handleSubmit}>
          <TextField
            {...params}
            label="Search"
            sx={{}}
            // InputProps={{ ...params.InputProps, type: "search" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      )}
    />
  );
};

export default SearchUser;
