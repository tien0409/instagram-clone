import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_RESET,
  POST_LIST_CREATED_REQUEST,
  POST_LIST_CREATED_SUCCESS,
  POST_LIST_CREATED_FAIL,
  POST_LIST_CREATED_RESET,
  POST_TOGGLE_LIKE_REQUEST,
  POST_TOGGLE_LIKE_SUCCESS,
  POST_TOGGLE_LIKE_FAIL,
  POST_CREATE_RESET,
} from "../constants/postConstants";

export const postCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_CREATE_REQUEST:
      return { isLoading: true };
    case POST_CREATE_SUCCESS:
      return { isLoading: false, postCreated: payload };
    case POST_CREATE_FAIL:
      return { isLoading: false, err: payload };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const postListReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_LIST_REQUEST:
      return { isLoading: true };
    case POST_LIST_SUCCESS:
      return { isLoading: false, posts: payload };
    case POST_LIST_FAIL:
      return { isLoading: false, err: payload };
    case POST_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const postListCreatedReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_LIST_CREATED_REQUEST:
      return { isLoading: true };
    case POST_LIST_CREATED_SUCCESS:
      return { isLoading: false, postsCreated: payload };
    case POST_LIST_CREATED_FAIL:
      return { isLoading: false, err: payload };
    case POST_LIST_CREATED_RESET:
      return {};
    default:
      return state;
  }
};

export const postToggleLikeReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_TOGGLE_LIKE_REQUEST:
      return { isLoading: true };
    case POST_TOGGLE_LIKE_SUCCESS:
      return { isLoading: false, success: true };
    case POST_TOGGLE_LIKE_FAIL:
      return { isLoading: false, err: payload };
    default:
      return state;
  }
};
