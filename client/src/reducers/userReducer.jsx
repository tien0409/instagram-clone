import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SUGGESTED_FAIL,
  USER_SUGGESTED_REQUEST,
  USER_SUGGESTED_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
  USER_FOLLOW_FAIL,
  USER_FOLLOW_REQUEST,
  USER_FOLLOW_SUCCESS,
  USER_LOGOUT,
  USER_SUGGESTED_RESET,
  USER_UPDATE_AVATAR_FAIL,
  USER_UPDATE_AVATAR_REQUEST,
  USER_UPDATE_AVATAR_SUCCESS,
  USER_UPDATE_AVATAR_RESET,
  USER_DELETE_AVATAR_FAIL,
  USER_DELETE_AVATAR_REQUEST,
  USER_DELETE_AVATAR_SUCCESS,
  USER_DELETE_AVATAR_RESET,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_RESET,
  USER_UPDATE_PASSWORD_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_FIND_FAIL,
  USER_FIND_REQUEST,
  USER_FIND_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { isLoading: false, err: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST:
      return { isLoading: true };
    case USER_REGISTER_SUCCESS:
      return { isLoading: false };
    case USER_REGISTER_FAIL:
      return { isLoading: false, err: payload };
    default:
      return state;
  }
};

export const userSuggestedReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_SUGGESTED_REQUEST:
      return { isLoading: true };
    case USER_SUGGESTED_SUCCESS:
      return { isLoading: false, listSuggested: payload };
    case USER_SUGGESTED_FAIL:
      return { isLoading: false, err: payload };
    case USER_SUGGESTED_RESET:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return { isLoading: true };
    case USER_DETAILS_SUCCESS:
      return { isLoading: false, userInfoDetails: payload };
    case USER_DETAILS_FAIL:
      return { isLoading: false, err: payload };
    case USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const userFollowReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_FOLLOW_REQUEST:
      return { isLoading: true };
    case USER_FOLLOW_SUCCESS:
      return { isLoading: false, success: true };
    case USER_FOLLOW_FAIL:
      return { isLoading: false, err: payload };
    default:
      return state;
  }
};

export const userUpdateAvatarReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_AVATAR_REQUEST:
      return { isLoading: true };
    case USER_UPDATE_AVATAR_SUCCESS:
      return { isLoading: false, success: true };
    case USER_UPDATE_AVATAR_FAIL:
      return { isLoading: false, err: payload };
    case USER_UPDATE_AVATAR_RESET:
      return {};
    default:
      return state;
  }
};

export const userDeleteAvatarReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DELETE_AVATAR_REQUEST:
      return { isLoading: true };
    case USER_DELETE_AVATAR_SUCCESS:
      return { isLoading: false, success: true };
    case USER_DELETE_AVATAR_FAIL:
      return { isLoading: false, err: payload };
    case USER_DELETE_AVATAR_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_REQUEST:
      return { isLoading: true };
    case USER_UPDATE_SUCCESS:
      return { isLoading: false, success: true };
    case USER_UPDATE_FAIL:
      return { isLoading: false, err: payload };
    case USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdatePasswordReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_PASSWORD_REQUEST:
      return { isLoading: true };
    case USER_UPDATE_PASSWORD_SUCCESS:
      return { isLoading: false, success: true, message: payload };
    case USER_UPDATE_PASSWORD_FAIL:
      return { isLoading: false, err: payload };
    default:
      return state;
  }
};

export const userFindReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_FIND_REQUEST:
      return { isLoading: true };
    case USER_FIND_SUCCESS:
      return { isLoading: false, usersFind: payload };
    case USER_FIND_FAIL:
      return { isLoading: false, err: payload };
    default:
      return state;
  }
};
