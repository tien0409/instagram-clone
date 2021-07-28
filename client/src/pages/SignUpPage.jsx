import { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Form, Spinner } from "../components";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { register } from "../actions/userAction";
import { HelmetContainer } from "../containers";

const SignUpPage = () => {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, isLoading, err } = userRegister;
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // check valid fields email, password
  const isInvalid =
    email.trim() === "" ||
    username.trim() === "" ||
    fullName.trim() === "" ||
    password.trim() === "" ||
    password.trim().length < 6 ||
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase(),
    );

  useEffect(() => {
    if (userInfo) {
      history.push(ROUTES.HOME);
    }
  }, [userInfo, history]);

  // handle register
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(email, username, fullName, password));
  };

  return (
    <>
      <HelmetContainer title="Instagram" />
      <Form>
        <Form.Wrap>
          <Form.ImgWrap>
            <Form.ImgList>
              <Form.ImgItem />
            </Form.ImgList>
          </Form.ImgWrap>
          <Form.BaseWrap>
            <Form.Base onSubmit={handleSubmit} autocomplete="off">
              <Form.Title>Instagram</Form.Title>
              <Form.Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <Form.Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
              />
              <Form.Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
              />
              <Form.Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <Form.Button disabled={isInvalid} type="submit">
                {isLoading ? (
                  <Spinner size="sm" color="white"></Spinner>
                ) : (
                  "Sign up"
                )}
              </Form.Button>

              <Form.Separate></Form.Separate>

              <Form.SocialWrap signup="true" to="/">
                <Form.SocialIcon>
                  <AiFillFacebook />
                </Form.SocialIcon>
                <Form.SocialName>Log in with Facebook</Form.SocialName>
              </Form.SocialWrap>
              {err && <Form.Error register>{err}</Form.Error>}
            </Form.Base>
            <Form.Option>
              <Form.OptionText>
                Have an account?&nbsp;
                <Form.OptionLink to="/login">Log in</Form.OptionLink>
              </Form.OptionText>
            </Form.Option>
            <Form.DownloadWrap>
              <Form.DownloadText>Get the app</Form.DownloadText>
              <Form.DownloadOS>
                <Form.DownloadLink>
                  <Form.DownloadImg alt="apple" src="/images/apple.png" />
                </Form.DownloadLink>
                <Form.DownloadLink>
                  <Form.DownloadImg
                    alt="google-play"
                    src="/images/google-play.png"
                  />
                </Form.DownloadLink>
              </Form.DownloadOS>
            </Form.DownloadWrap>
          </Form.BaseWrap>
        </Form.Wrap>
      </Form>
    </>
  );
};

export default SignUpPage;
