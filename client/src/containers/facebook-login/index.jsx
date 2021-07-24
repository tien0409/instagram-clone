import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { loginWithFb } from "../../actions/userAction";

const FacebookLoginContainer = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const componentClicked = (res) => {
    // console.log("res click", res);
  };

  const responseFacebook = (res) => {
    setIsLoggedIn(false);
    dispatch(loginWithFb(res.accessToken));
  };

  return (
    isLoggedIn && (
      <FacebookLogin
        appId="252711846362596"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    )
  );
};

export default FacebookLoginContainer;
