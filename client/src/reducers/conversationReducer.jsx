import {
  CONVERSATION_CREATE_REQUEST,
  CONVERSATION_CREATE_SUCCESS,
  CONVERSATION_CREATE_FAIL,
  CONVERSATION_CREATE_RESET,
  CONVERSATION_LIST_REQUEST,
  CONVERSATION_LIST_SUCCESS,
  CONVERSATION_LIST_FAIL,
  CONVERSATION_LIST_RESET,
} from "../constants/conversationConstants";

export const conversationCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONVERSATION_CREATE_REQUEST:
      return { isLoading: true };
    case CONVERSATION_CREATE_SUCCESS:
      return { isLoading: false, conversation: payload };
    case CONVERSATION_CREATE_FAIL:
      return { isLoading: false, err: payload };
    case CONVERSATION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const conversationListReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONVERSATION_LIST_REQUEST:
      return { isLoading: true };
    case CONVERSATION_LIST_SUCCESS:
      return { isLoading: false, conversations: payload };
    case CONVERSATION_LIST_FAIL:
      return { isLoading: false, err: payload };
    case CONVERSATION_LIST_RESET:
      return {};
    default:
      return state;
  }
};
