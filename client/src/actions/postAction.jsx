import axios from "axios";
import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_CREATED_FAIL,
  POST_LIST_CREATED_REQUEST,
  POST_LIST_CREATED_SUCCESS,
  POST_TOGGLE_LIKE_FAIL,
  POST_TOGGLE_LIKE_REQUEST,
  POST_TOGGLE_LIKE_SUCCESS,
} from "../constants/postConstants";

export const createPost = (caption, data) => async (dispatch, getState) => {
  dispatch({ type: POST_CREATE_REQUEST });

  const resImg = await axios.post(
    `https://api.cloudinary.com/v1_1/dspnu5m0h/image/upload`,
    data,
  );

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
      "/api/post",
      { caption, imagePost: resImg.data.url },
      config,
    );

    dispatch({ type: POST_CREATE_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: POST_CREATE_FAIL, payload: err.response.data.msg });
  }
};

export const getAllPost = () => async (dispatch, getState) => {
  dispatch({ type: POST_LIST_REQUEST });

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
    const res = await axios.get("/api/post", config);

    dispatch({ type: POST_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: POST_LIST_FAIL, payload: err.response.data.msg });
  }
};

// get all post user created
export const getAllPostCreated = (name) => async (dispatch, getState) => {
  dispatch({ type: POST_LIST_CREATED_REQUEST });

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
    const res = await axios.get(`/api/post/created/${name}`, config);

    dispatch({ type: POST_LIST_CREATED_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: POST_LIST_CREATED_FAIL, payload: err.response.data.msg });
  }
};

// toggle like and unlike
export const toggleLike = (postId) => async (dispatch, getState) => {
  dispatch({ type: POST_TOGGLE_LIKE_REQUEST });

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
    await axios.get(`/api/post/like/${postId}`, config);

    dispatch({ type: POST_TOGGLE_LIKE_SUCCESS });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: POST_TOGGLE_LIKE_FAIL, payload: err.response.data.msg });
  }
};
