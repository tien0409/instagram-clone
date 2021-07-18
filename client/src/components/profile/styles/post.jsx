import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const PostList = styled.div`
  ${({ nopost }) =>
    nopost
      ? `
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 245px;

    & ${NoPost} {
      display: block;
    }
  `
      : `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const NoPost = styled.div`
  // display: none;
  color: var(--text-color);
  font-size: 3rem;
`;

export const PostModal = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const PostItem = styled(Link)`
  flex-basis: 288px;
  height: 288px;
  margin: 8px;
  position: relative;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:hover ${PostModal} {
    display: block;
  }

  @media (max-width: 45.9375em) {
    flex-basis: 300px;
    height: 300px;
    margin: 5px;
  }
`;

export const PostImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
`;

export const PostReactWrap = styled.div`
  display: flex;
  color: var(--white-color);
  margin: 0 10px;
`;

export const PostReactIcon = styled.span`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

export const PostReactNumber = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 4px;
`;
