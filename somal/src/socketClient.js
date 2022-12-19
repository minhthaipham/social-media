import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SocketClient = () => {
  const { users } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (socket) {
      socket.on("newUser", (data) => {
        dispatch({ type: "ADD_USER", payload: data });
      });
      socket.on("removeUser", (data) => {
        dispatch({ type: "REMOVE_USER", payload: data });
      });
    }
  }, [socket, dispatch]);
  return <></>;
};

export default SocketClient;
