import axios from "axios";
import {
  CONVERSATION_CREATE_REQUEST,
  CONVERSATION_CREATE_SUCCESS,
  CONVERSATION_CREATE_FAIL,
  CONVERSATION_LIST_REQUEST,
  CONVERSATION_LIST_SUCCESS,
  CONVERSATION_LIST_FAIL,
} from "../constants/conversationConstants";

// create conversation
export const createConversation = (userId) => async (dispatch, getState) => {
  dispatch({ type: CONVERSATION_CREATE_REQUEST });

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
    const res = await axios.post(`/api/conversation/${userId}`, {}, config);

    dispatch({ type: CONVERSATION_CREATE_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: CONVERSATION_CREATE_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// get all conversation
export const getAllConversation = () => async (dispatch, getState) => {
  dispatch({ type: CONVERSATION_LIST_REQUEST });

  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    const res = await axios.get(`/api/conversation`, config);

    dispatch({ type: CONVERSATION_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: CONVERSATION_LIST_FAIL,
      payload: err.response.data.msg,
    });
  }
};
