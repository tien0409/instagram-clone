import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavInputWrap = styled.div`
  position: relative;
`;

export const NavSearch = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  transform: translateX(20%);
  width: 376px;
  background-color: var(--white-color);
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: ${({ visible }) => (visible ? "block" : "none")};

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
    background: var(--white-color);
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
  }
`;

export const NavSearchHeading = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px 16px 10px;
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavSearchHeadingText = styled.div`
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.6rem;
`;

export const NavSearchHeadingClear = styled.div`
  font-size: 1.5rem;
  color: #0095f6;
  font-weight: 500;
  cursor: pointer;

  ${({ noUser }) =>
    noUser &&
    `
    display: none;
    `}
`;

export const NavSearchList = styled.div`
  height: 364px;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;

  ${({ noUser }) =>
    noUser &&
    `
      display: flex;
      justify-content: center;
      align-items: center;

    `}
`;

export const NavSearchItem = styled(Link)`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  position: relative;

  &:hover {
    background-color: #fafafa;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export const NavSearchInforWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const NavSearchAvatar = styled.img`
  width: 44px;
  border-radius: 50%;
`;
export const NavSearchNameWrap = styled.div`
  margin-left: 10px;
`;
export const NavSearchName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
export const NavSearchFullName = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: #777;
`;
export const NavSearchRemove = styled.div`
  font-size: 1.8rem;
  color: #8e8e8e;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index: 20;
`;

export const NavSearchNoUser = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  color: #8e8e8e;

  ${({ history }) => (history ? "display: none" : "display: block")}
`;

export const NavbarInput = styled.input`
  color: var(--black-color);
  border: 1px solid #dbdbdb;
  outline: none;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: rgba(230, 230, 230, 0.4);

  @media (max-width: 34rem) {
    display: none;
  }
`;
