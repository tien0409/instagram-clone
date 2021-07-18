import { Redirect, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export const ProtectedRoute = ({ userInfo, children, ...restProps }) => (
  <Route
    {...restProps}
    render={() => {
      if (userInfo) {
        return children;
      }

      // no user
      return <Redirect to={{ pathname: ROUTES.SIGN_IN }} />;
    }}
  />
);

export const UserRedirect = ({ userInfo, children, ...restProps }) => (
  <Route
    {...restProps}
    render={() => {
      if (!userInfo) {
        return children;
      }

      // have user => prevent direct to children and redirect to home page
      return <Redirect to={{ pathname: ROUTES.HOME }} />;
    }}
  />
);
