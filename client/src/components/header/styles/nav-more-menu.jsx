import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavAvatarWrap = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
`;

export const NavAvatarImg = styled.img`
  width: calc(2.4rem - 1px);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const animateMenuMore = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

export const NavMoreMenu = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: -27px;
  width: 230px;
  background-color: var(--white-color);
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  display: none;
  animation: ${animateMenuMore} 0.1s ease-in;
  transform-origin: 205px 0;
  z-index: 3;

  &:before {
    --arrow-size: 1.4rem;
    content: "";
    position: absolute;
    top: -8px;
    right: calc(25px + (calc(var(--arrow-size) / 2)));
    width: var(--arrow-size);
    height: var(--arrow-size);
    transform: rotate(45deg);
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
    background-color: var(--white-color);
  }
`;

export const NavMenuList = styled.div``;

export const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 12px 16px;
  background-color: var(--white-color);
  position: relative;
  z-index: 1;

  &:hover {
    background-color: #fafafa;
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  ${({ separate }) => separate && `border-bottom: 1px solid #DBDBDB`}
`;

export const NavMenuLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
`;

export const NavMenuIcon = styled.span`
  padding-right: 10px;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavMenuText = styled.span`
  font-size: 1.4rem;
`;
