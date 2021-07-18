import styled from "styled-components/macro";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;

  @media (max-width: 28.125em) {
    display: block;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: var(--text-color);
`;

export const Wrap = styled.div`
  max-width: 935px;
  width: 100%;
  // height: 818px;
  padding: 155px 50px;
  display: flex;

  @media (max-width: 28.125em) {
    padding: 30px;
  }
`;

export const ImgWrap = styled.div`
  width: 454px;
  height: 618px;
  background-image: url(/images/bg-phone.png);
  background-repeat: no-repeat;

  @media (max-width: 56.5625em) {
    display: none;
  }
`;

export const ImgList = styled.div`
  position: relative;
  margin: 100px 63px 0 0;
`;

export const ImgItem = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const BaseWrap = styled.div`
  margin: 30px auto;
  max-width: 350px;
  width: 100%;

  @media (max-width: 28.125em) {
    margin: 0 auto;
  }
`;

export const Base = styled.form`
  background-color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

  @media (max-width: 28.125em) {
    background-color: #fafafa;
    border: none;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 34px;

  @media (max-width: 28.125em) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 12px 10px;
  margin-bottom: 6px;
  background-color: #fafafa;
  outline: none;
  border: 1px solid #dbdbdb;
  color: var(--text-color);
  font-size: 1.3rem;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  height: 32px;
  padding: 8px 0;
  margin: 8px 0 22px 0;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: rgba(var(--d69, 0, 149, 246), 1);
  color: #eefefe;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;

  ${({ disabled }) => disabled && "background-color: #b2defb"}
`;

export const Separate = styled.span`
  width: 100%;
  height: 1px;
  background-color: #dbdbdb;
  position: relative;
  display: inline-block;

  &:before {
    content: "OR";
    padding: 0 20px;
    background-color: var(--white-color);
    color: #8e8e9c;
    font-weight: 500;
    font-size: 1.2rem;
    position: absolute;
    top: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SocialWrap = styled(Link)`
  margin: ${({ signup }) => (signup ? "28px 0 0" : "28px 0 24px")};
  display: flex;
  align-items: center;
  color: #385185;
  font-weight: 600;
`;

export const SocialIcon = styled.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const SocialName = styled.span`
  font-size: 1.4rem;
  margin-left: 8px;
`;

export const ForgotPassword = styled(Link)`
  font-size: 1.2rem;
  color: #385185;
`;

export const Option = styled.div`
  max-width: 350px;
  width: 100%;
  background-color: var(--white-color);
  margin-top: 12px;
  padding: 24px 72px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;

  @media (max-width: 28.125em) {
    background-color: #fafafa;
    border: none;
    margin-top: 0;
  }
`;

export const OptionText = styled.span`
  text-align: center;
`;

export const OptionLink = styled(Link)`
  color: #0895f6;
  font-weight: 600;
  display: inline-block;
`;

export const Error = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: #ed4956;

  ${({ register, login }) => {
    if (login) {
      return "margin-bottom: 20px";
    }
    if (register) {
      return "margin-top: 20px;";
    }
  }}
`;
