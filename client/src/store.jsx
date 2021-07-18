import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  postCreateReducer,
  postListCreatedReducer,
  postListReducer,
  postToggleLikeReducer,
} from "./reducers/postReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userSuggestedReducer,
  userDetailsReducer,
  userFollowReducer,
  userUpdateAvatarReducer,
  userDeleteAvatarReducer,
  userUpdateReducer,
  userUpdatePasswordReducer,
  userFindReducer,
} from "./reducers/userReducer";
import {
  conversationCreateReducer,
  conversationListReducer,
} from "./reducers/conversationReducer";
import {
  messageListReducer,
  messageCreateReducer,
} from "./reducers/messageReducer";
import { socketConnectReducer } from "./reducers/socketReducers";

const rootReducer = combineReducers({
  socketConnect: socketConnectReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userSuggested: userSuggestedReducer,
  userDetails: userDetailsReducer,
  userFollow: userFollowReducer,
  userUpdateAvatar: userUpdateAvatarReducer,
  userDeleteAvatar: userDeleteAvatarReducer,
  userUpdate: userUpdateReducer,
  userUpdatePassword: userUpdatePasswordReducer,
  userFind: userFindReducer,

  postCreate: postCreateReducer,
  postList: postListReducer,
  postListCreated: postListCreatedReducer,
  postToggleLike: postToggleLikeReducer,

  conversationCreate: conversationCreateReducer,
  conversationList: conversationListReducer,

  messageList: messageListReducer,
  messageCreate: messageCreateReducer,
});

const userInfoFromLocal = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromLocal,
  },
};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
