import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import { ProtectedRoute, UserRedirect } from "./helpers/protected-route";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "./actions/userAction";
import { connectSocket } from "./actions/socketAction";
import SettingPage from "./pages/SettingPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const InboxPage = lazy(() => import("./pages/InboxPage"));

function App() {
  const dispatch = useDispatch();

  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, err } = userLogin;

  useEffect(() => {
    if (!socket && userInfo && !err) {
      dispatch(connectSocket(userInfo));
    }
    if (err) {
      dispatch(logout());
    }

    if (socket) {
      socket.emit("client-get-number-unread-message");
    }
  }, [dispatch, socket, userInfo, err]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <ProtectedRoute userInfo={userInfo} path={ROUTES.HOME} exact>
            <HomePage socket={socket} />
          </ProtectedRoute>

          <UserRedirect userInfo={userInfo} path={ROUTES.SIGN_IN}>
            <LoginPage />
          </UserRedirect>
          <UserRedirect userInfo={userInfo} path={ROUTES.SIGN_UP}>
            <SignUpPage />
          </UserRedirect>

          <ProtectedRoute userInfo={userInfo} path={ROUTES.INBOX}>
            <InboxPage />
          </ProtectedRoute>

          <ProtectedRoute exact userInfo={userInfo} path={ROUTES.PROFILE}>
            <ProfilePage />
          </ProtectedRoute>

          <ProtectedRoute userInfo={userInfo} path={ROUTES.SETTING}>
            <SettingPage />
          </ProtectedRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
