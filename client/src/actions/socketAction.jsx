import io from "socket.io-client";
import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
} from "../constants/socketConstants";

export const connectSocket = (userInfo) => (dispatch) => {
  const socket = io("http://localhost:8000");

  socket.on("disconnect", () => {
    console.log("socket disconnect from server");
    dispatch({ type: SOCKET_DISCONNECT });
  });

  socket.emit("client-online", userInfo);

  dispatch({ type: SOCKET_CONNECT, payload: socket });
};
