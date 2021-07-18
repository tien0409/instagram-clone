import {
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_RESET,
  MESSAGE_CREATE_REQUEST,
  MESSAGE_CREATE_SUCCESS,
  MESSAGE_CREATE_FAIL,
} from "../constants/messageConstants";

export const messageListReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case MESSAGE_LIST_REQUEST:
      return { isLoading: true };
    case MESSAGE_LIST_SUCCESS:
      return { isLoading: false, messages: payload };
    case MESSAGE_LIST_FAIL:
      return { isLoading: false, err: payload };
    case MESSAGE_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const messageCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case MESSAGE_CREATE_REQUEST:
      return { isLoading: true };
    case MESSAGE_CREATE_SUCCESS:
      return { isLoading: false, success: true };
    case MESSAGE_CREATE_FAIL:
      return { isLoading: false, err: payload };
    default:
      return state;
  }
};
