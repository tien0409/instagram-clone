import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SUGGESTED_REQUEST,
  USER_SUGGESTED_SUCCESS,
  USER_SUGGESTED_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_FOLLOW_REQUEST,
  USER_FOLLOW_SUCCESS,
  USER_FOLLOW_FAIL,
  USER_LOGOUT,
  USER_COMMENT_REQUEST,
  USER_COMMENT_SUCCESS,
  USER_COMMENT_FAIL,
  USER_UPDATE_AVATAR_REQUEST,
  USER_UPDATE_AVATAR_SUCCESS,
  USER_UPDATE_AVATAR_FAIL,
  USER_DELETE_AVATAR_REQUEST,
  USER_DELETE_AVATAR_SUCCESS,
  USER_DELETE_AVATAR_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
  USER_FIND_REQUEST,
  USER_FIND_SUCCESS,
  USER_FIND_FAIL,
} from "../constants/userConstants";
import { SOCKET_DISCONNECT } from "../constants/socketConstants";

// load user when open website => auto login
export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("userInfo")) {
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get("/api/user/auth", config);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: { ...res.data, token } });
    } catch (err) {
      console.log("err");
      console.log("err", err);
      dispatch({ type: USER_LOGIN_FAIL, payload: err.response.data.msg });
    }
  }
};

// login user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "/api/user/signin",
      { email, password },
      config,
    );

    localStorage.setItem("userInfo", JSON.stringify(res.data));
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_LOGIN_FAIL, payload: err.response.data.msg });
  }
};

// register
export const register =
  (email, username, fullName, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        "/api/user/signup",
        { email, username, fullName, password },
        config,
      );

      localStorage.setItem("userInfo", JSON.stringify(res.data));
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      console.log("err", err);
      dispatch({ type: USER_REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

// logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("history");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: SOCKET_DISCONNECT });
};

// get all user suggestion follow
export const getAllUserSuggestion = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_SUGGESTED_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.get("/api/user/suggestion", config);

    dispatch({ type: USER_SUGGESTED_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_SUGGESTED_FAIL, payload: err.response.data.msg });
  }
};

// get info user details by username
export const getUserDetails = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.get(`/api/user/details/${username}`, config);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_DETAILS_FAIL, payload: err.response.data.msg });
  }
};

// follow user
export const followUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_FOLLOW_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post("/api/user/follow", { username }, config);

    dispatch({ type: USER_FOLLOW_SUCCESS });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_FOLLOW_FAIL, payload: err.response.data.msg });
  }
};

// comment post
export const commentPost = (comment, postId) => async (dispatch, getState) => {
  dispatch({ type: USER_COMMENT_REQUEST });

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
    await axios.post(
      `/api/user/comment/${postId}`,
      { content: comment },
      config,
    );

    dispatch({ type: USER_COMMENT_SUCCESS });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_COMMENT_FAIL, payload: err.response.data.msg });
  }
};

// update avatar
export const updateAvatar = (data) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_AVATAR_REQUEST });

  const resImg = await axios.post(
    "http://api.cloudinary.com/v1_1/dspnu5m0h/image/upload",
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
    await axios.put(`/api/user/avatar`, { avatar: resImg.data.url }, config);

    dispatch({ type: USER_UPDATE_AVATAR_SUCCESS });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_UPDATE_AVATAR_FAIL, payload: err.response.data.msg });
  }
};

// delete avatar ==> avatar default
export const deleteAvatar = () => async (dispatch, getState) => {
  dispatch({ type: USER_DELETE_AVATAR_REQUEST });

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
    await axios.delete("/api/user/avatar", config);

    dispatch({ type: USER_DELETE_AVATAR_SUCCESS });
  } catch (err) {
    console.log("err", err);
    dispatch({ type: USER_DELETE_AVATAR_FAIL, payload: err.response.data.msg });
  }
};

// update info user
export const updateInfo =
  (fullName, username, email, phoneNumber, gender) =>
  async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_REQUEST });

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
      await axios.put(
        "/api/user",
        { fullName, username, email, phoneNumber, gender },
        config,
      );

      dispatch({ type: USER_UPDATE_SUCCESS });
    } catch (err) {
      console.log("err", err);
      dispatch({ type: USER_UPDATE_FAIL, payload: err.response.data.msg });
    }
  };

// update password
export const updatePassword =
  (password, confirmPassword) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PASSWORD_REQUEST });

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
      const res = await axios.put(
        "/api/user/password",
        { password, confirmPassword },
        config,
      );

      dispatch({ type: USER_UPDATE_PASSWORD_SUCCESS, payload: res.data.msg });
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: USER_UPDATE_PASSWORD_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

// find user
export const findUser = (keyword) => async (dispatch, getState) => {
  dispatch({ type: USER_FIND_REQUEST });

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
    const res = await axios.get(`/api/user?keyword=${keyword}`, config);

    dispatch({ type: USER_FIND_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: USER_FIND_FAIL,
      payload: err.response.data.msg,
    });
  }
};
