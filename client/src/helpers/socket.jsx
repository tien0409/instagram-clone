import io from "socket.io-client";

const socket = (function () {
  let socket;

  const connect = (token, cb) => {
    socket = io.connect(process.env.REACT_APP_SOCKET_URL_SERVER, {
      query: { token },
    });

    if (cb !== undefined) {
      cb();
    }
  };

  const sendSocket = (eventName, data) => {
    socket.emit(eventName, data);
  };

  const receiveSocket = (eventName, cb) => {
    socket.on(eventName, cb);
  };

  const disconnect = () => {
    socket.disconnect();
  };

  return {
    connect,
    sendSocket,
    receiveSocket,
    disconnect,
  };
})();

export default socket;
