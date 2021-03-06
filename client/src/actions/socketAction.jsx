import io from "socket.io-client";
import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
} from "../constants/socketConstants";

export const connectSocket = (userInfo) => (dispatch) => {
  const socket = io("/");

  socket.on("disconnect", () => {
    dispatch({ type: SOCKET_DISCONNECT });
  });

  socket.emit("client-online", userInfo);

  dispatch({ type: SOCKET_CONNECT, payload: socket });
};
