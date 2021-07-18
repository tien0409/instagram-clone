import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { NavMoreMenu } from "./nav-more-menu";

export const Container = styled.header`
  height: var(--header-height);
  background-color: var(--white-color);
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  ${({ relative }) => relative && "position: relative;"}
`;

export const Navbar = styled.nav`
  height: 100%;
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;

  @media (max-width: 62.4375em) {
    padding: 0 20px;
  }
`;

export const NavbarLogo = styled.img`
  margin-top: 6px;
  width: 103px;

  @media (max-width: 22.75em) {
    width: 80px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  ${({ clicked, avatar }) =>
    clicked &&
    avatar &&
    `
    ${NavMoreMenu} {
      display: block;
    }
    `}
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  display: block;
  color: var(--black-color);
  position: relative;

  @media (max-width: 22.75em) {
    margin-right: 15px;
  }
`;

export const NavIcon = styled.span`
  font-size: 2.4rem;
  display: flex;
  align-items: center;
`;

export const NavMessageUnread = styled.span`
  position: absolute;
  top: -5px;
  right: -7px;
  background-color: #ed4956;
  padding: 6px;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.2rem;
  border-radius: 48%;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavNumberMessageUnread = styled.span``;
