import { Search } from "@mui/icons-material";
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
import debounce from "lodash.debounce";
import { searchUser } from "../../redux/reducer/user";
const SearchUser = () => {
  const users = useSelector((state) => state.user.searchUser);
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // const debounceDropDown = React.useCallback(
  //   debounce((search) => {
  //     dispatch(searchUser(search));
  //   }, 1500),
  //   []
  // );
  const debounceDropDown = React.useRef(
    debounce((search) => {
      if (search.trim()) {
        dispatch(searchUser(search));
      }
    }, 1000)
  ).current;
  const handleSubmit = (e) => {
    setSearch(e.target.value);
    debounceDropDown(search);
    setOpen(true);
  };
  React.useEffect(() => {
    const click = window.addEventListener("click", () => {
      setOpen(false);
    });
    return () => {
      window.removeEventListener("click", click);
    };
  }, []);

  return (
    <div className="w-[50%]">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search />
        </div>
        <input
          // type="search"
          // id="default-search"
          className="rounded-lg focus:border-none focus:outline-none border-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          value={search}
          onChange={handleSubmit}
        />
        <div className={open ? "block" : "hidden"}>
          <div className="absolute flex items-center  left-0 top-[100%] w-full mt-2">
            <div className="w-full bg-white rounded-lg shadow-lg">
              {users.map((user) => (
                <Link
                  to={`/profile/${user._id}`}
                  key={user._id}
                  onClick={() => {
                    setOpen(false);
                    setSearch("");
                  }}
                >
                  <div className="flex p-3 items-center">
                    <Avatar src={user.avatar} alt="avatar" />
                    <p className="mx-3">{user.fullName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
