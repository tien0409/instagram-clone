import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
} from "../constants/socketConstants";

export const socketConnectReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SOCKET_CONNECT:
      return { socket: payload };
    case SOCKET_DISCONNECT:
      return {};
    default:
      return state;
  }
};
