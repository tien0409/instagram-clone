import {
  Container,
  PersonList,
  Person,
  AvatarWrap,
  Avatar,
  Name,
  Next,
  Prev,
} from "./styles/story";
import React from "react";

const Store = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Store.PersonList = React.forwardRef(function StorePersonList(
  { children, ...restProps },
  ref,
) {
  return (
    <PersonList ref={ref} {...restProps}>
      {children}
    </PersonList>
  );
});

Store.Person = function StorePerson({ children, ...restProps }) {
  return <Person {...restProps}>{children}</Person>;
};

Store.AvatarWrap = function StoreAvatarWrap({ children, ...restProps }) {
  return <AvatarWrap {...restProps}>{children}</AvatarWrap>;
};

Store.Avatar = function StoreAvatar({ src, ...restProps }) {
  return <Avatar src={src} {...restProps} />;
};

Store.Name = function StoreName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Store.Next = function StoreNext({ children, ...restProps }) {
  return <Next {...restProps}>{children}</Next>;
};

Store.Prev = function StorePrev({ children, ...restProps }) {
  return <Prev {...restProps}>{children}</Prev>;
};

export default Store;
