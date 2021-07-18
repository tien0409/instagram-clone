import { forwardRef } from "react";
import {
  Container,
  Navbar,
  NavbarLogo,
  NavList,
  NavItem,
  NavLink,
  NavIcon,
  NavMessageUnread,
  NavNumberMessageUnread,
} from "./styles/header";
import {
  NavAvatarWrap,
  NavAvatarImg,
  NavMoreMenu,
  NavMenuList,
  NavMenuItem,
  NavMenuIcon,
  NavMenuText,
  NavMenuLink,
} from "./styles/nav-more-menu";
import {
  NavbarInput,
  NavInputWrap,
  NavSearch,
  NavSearchHeading,
  NavSearchHeadingText,
  NavSearchHeadingClear,
  NavSearchList,
  NavSearchItem,
  NavSearchInforWrap,
  NavSearchAvatar,
  NavSearchName,
  NavSearchNameWrap,
  NavSearchRemove,
  NavSearchFullName,
  NavSearchNoUser,
} from "./styles/nav-search";

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
};

Header.NavbarLogo = function HeaderNavbarLogo({ src, ...restProps }) {
  return <NavbarLogo src={src} {...restProps} />;
};

Header.NavbarInput = forwardRef(function HeaderNavbarInput(
  { ...restProps },
  ref,
) {
  return <NavbarInput ref={ref} {...restProps} />;
});

Header.NavList = function HeaderNavList({ children, ...restProps }) {
  return <NavList {...restProps}>{children}</NavList>;
};

Header.NavItem = function HeaderNavItem({ children, ...restProps }) {
  return <NavItem {...restProps}>{children}</NavItem>;
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};

Header.NavIcon = function HeaderNavIcon({ children, ...restProps }) {
  return <NavIcon {...restProps}>{children}</NavIcon>;
};

Header.NavAvatarWrap = function HeaderNavAvatarWrap({
  children,
  ...restProps
}) {
  return <NavAvatarWrap {...restProps}>{children}</NavAvatarWrap>;
};

Header.NavAvatarImg = function HeaderNavAvatarImg({ src, ...restProps }) {
  return <NavAvatarImg src={src} {...restProps} />;
};

Header.NavMoreMenu = function HeaderNavMoreMenu({ children, ...restProps }) {
  return <NavMoreMenu {...restProps}>{children}</NavMoreMenu>;
};

Header.NavMenuList = function HeaderNavMenuList({ children, ...restProps }) {
  return <NavMenuList {...restProps}>{children}</NavMenuList>;
};

Header.NavMenuLink = function HeaderNavMenuLink({ children, ...restProps }) {
  return <NavMenuLink {...restProps}>{children}</NavMenuLink>;
};

Header.NavMenuItem = function HeaderNavMenuItem({ children, ...restProps }) {
  return <NavMenuItem {...restProps}>{children}</NavMenuItem>;
};

Header.NavMenuIcon = function HeaderNavMenuIcon({ children, ...restProps }) {
  return <NavMenuIcon {...restProps}>{children}</NavMenuIcon>;
};

Header.NavMenuText = function HeaderNavMenuText({ children, ...restProps }) {
  return <NavMenuText {...restProps}>{children}</NavMenuText>;
};

Header.NavMessageUnread = function HeaderNavMessageUnread({
  children,
  ...restProps
}) {
  return <NavMessageUnread {...restProps}>{children}</NavMessageUnread>;
};

Header.NavNumberMessageUnread = function HeaderNavNumberMessageUnread({
  children,
  ...restProps
}) {
  return (
    <NavNumberMessageUnread {...restProps}>{children}</NavNumberMessageUnread>
  );
};

Header.NavInputWrap = forwardRef(function HeaderNavInputWrap(
  { children, ...restProps },
  ref,
) {
  return (
    <NavInputWrap ref={ref} {...restProps}>
      {children}
    </NavInputWrap>
  );
});

Header.NavSearch = function HeaderNavSearch({ children, ...restProps }) {
  return <NavSearch {...restProps}>{children}</NavSearch>;
};

Header.NavSearchHeading = function HeaderNavSearchHeading({
  children,
  ...restProps
}) {
  return <NavSearchHeading {...restProps}>{children}</NavSearchHeading>;
};

Header.NavSearchHeadingText = function HeaderNavSearchHeadingText({
  children,
  ...restProps
}) {
  return <NavSearchHeadingText {...restProps}>{children}</NavSearchHeadingText>;
};

Header.NavSearchHeadingClear = function HeaderNavSearchHeadingClear({
  children,
  ...restProps
}) {
  return (
    <NavSearchHeadingClear {...restProps}>{children}</NavSearchHeadingClear>
  );
};

Header.NavSearchList = function HeaderNavSearchList({
  children,
  ...restProps
}) {
  return <NavSearchList {...restProps}>{children}</NavSearchList>;
};

Header.NavSearchItem = function HeaderNavSearchItem({
  children,
  ...restProps
}) {
  return <NavSearchItem {...restProps}>{children}</NavSearchItem>;
};

Header.NavSearchInforWrap = function HeaderNavSearchInforWrap({
  children,
  ...restProps
}) {
  return <NavSearchInforWrap {...restProps}>{children}</NavSearchInforWrap>;
};

Header.NavSearchAvatar = function HeaderNavSearchAvatar({ src, ...restProps }) {
  return <NavSearchAvatar src={src} {...restProps} />;
};

Header.NavSearchNameWrap = function HeaderNavSearchNameWrap({
  children,
  ...restProps
}) {
  return <NavSearchNameWrap {...restProps}>{children}</NavSearchNameWrap>;
};

Header.NavSearchName = function HeaderNavSearchName({
  children,
  ...restProps
}) {
  return <NavSearchName {...restProps}>{children}</NavSearchName>;
};

Header.NavSearchFullName = function HeaderNavSearchFullName({
  children,
  ...restProps
}) {
  return <NavSearchFullName {...restProps}>{children}</NavSearchFullName>;
};

Header.NavSearchRemove = function HeaderNavSearchRemove({
  children,
  ...restProps
}) {
  return <NavSearchRemove {...restProps}>{children}</NavSearchRemove>;
};

Header.NavSearchNoUser = function HeaderNavSearchNoUser({
  children,
  ...restProps
}) {
  return <NavSearchNoUser {...restProps}>{children}</NavSearchNoUser>;
};

export default Header;
