import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Skeleton from "react-loading-skeleton";

export const Container = styled.div`
  background-color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  min-height: 50vh;
  position: relative;
`;

export const Infor = styled.div`
  display: flex;
  align-items: center;
  height: ${({ name }) => (name ? "20px" : "63px")};
`;

export const AvatarWrap = styled(Link)`
  display: inline-block;
  margin: 12px;
  text-decoration: none;
  // padding: 1px;
  position: relative;
  // background: linear-gradient(to right, red, purple);
  border-radius: 50%;
`;

export const Avatar = styled.img`
  padding: 2px;
  border-radius: 50%;
  width: 36px;
  background-color: var(--white-color);
`;
export const MyName = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--black-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: contain;
`;
export const Actions = styled.div`
  margin: 10px 18px;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
`;
export const Icon = styled.span`
  margin-right: 14px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;
export const NumberLiked = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: 18px;
  margin-bottom: 4px;
  color: var(--black-color);
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 18px; ;
`;

export const CaptionText = styled.div`
  font-size: 1.4rem;
  font-weight: 300px;
  margin-left: 4px;
  color: var(--text-color);
`;

export const ViewAllComment = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: #777;
  cursor: pointer;
  margin-bottom: 6px;
  margin-left: 18px;
`;

export const PersonWrap = styled.div`
  display: flex;
  margin-bottom: 6px;
  margin-left: 18px;
`;

export const PersonName = styled(Link)`
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--black-color);
`;

export const PersonComment = styled.div`
  font-size: 1.4rem;
  font-weight: 300px;
  margin-left: 4px;
  color: var(--text-color);
`;

export const CreatedPost = styled(ViewAllComment)`
  margin-top: 4px;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 400;
  color: #8e8e8e;
`;

export const Form = styled.form`
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin: 10px 0 0;
`;

export const Group = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  font-size: 1.4rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 8px 80px 8px 18px;

  :placeholder {
    color: #8e8e8e;
  }
`;

export const Button = styled.button`
  width: 75px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 0;
  outline: none;
  border: none;
  background-color: transparent;
  color: #0095f6;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Loading = styled(Skeleton)``;

export const LoadingWrap = styled.div`
  display: inline-block;
  margin: 12px;
  position: relative;
  border-radius: 50%;
`;
