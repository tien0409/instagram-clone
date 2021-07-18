import axios from "axios";
import {
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_CREATE_REQUEST,
  MESSAGE_CREATE_SUCCESS,
  MESSAGE_CREATE_FAIL,
} from "../constants/messageConstants";

// export const sendMessage = (content, conversationId) => (dispatch) => {
//   socket.emit("client-send-message", { content, conversationId });
// };

// get all message in conversation
export const getAllMessageInConversation =
  (conversationId) => async (dispatch, getState) => {
    dispatch({ type: MESSAGE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      const res = await axios.get(`/api/message/${conversationId}`, config);

      dispatch({ type: MESSAGE_LIST_SUCCESS, payload: res.data });
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: MESSAGE_LIST_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

// create message
export const createMessage =
  (conversationId, content) => async (dispatch, getState) => {
    dispatch({ type: MESSAGE_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      const res = await axios.post(
        `/api/message/${conversationId}`,
        { content },
        config,
      );

      dispatch({ type: MESSAGE_CREATE_SUCCESS, payload: res.data });
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: MESSAGE_CREATE_FAIL,
        payload: err.response.data.msg,
      });
    }
  };
