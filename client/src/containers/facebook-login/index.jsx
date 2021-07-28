import { Form } from "../../components";
import { AiFillFacebook } from "react-icons/ai";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
import { loginWithFb } from "../../actions/userAction";

const FacebookLoginContainer = () => {
  const dispatch = useDispatch();

  const responseFacebook = (res) => {
    if (res.status === "unknown") {
      return;
    }
    dispatch(loginWithFb(res.accessToken));
  };

  return (
    <FacebookLogin
      appId="252711846362596"
      autoLoad={false}
      callback={responseFacebook}
      render={(renderProps) => (
        <Form.SocialWrap onClick={renderProps.onClick}>
          <Form.SocialIcon>
            <AiFillFacebook />
          </Form.SocialIcon>
          <Form.SocialName>Log in with Facebook</Form.SocialName>
        </Form.SocialWrap>
      )}
    />
  );
};

export default FacebookLoginContainer;
