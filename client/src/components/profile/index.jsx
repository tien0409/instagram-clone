import {
  Container,
  Separate,
  Error,
  Loading,
  LoadingWrap,
} from "./styles/profile";
import {
  HeadingWrap,
  HeadingAvatar,
  HeadingInfor,
  HeadingUsernameWrap,
  HeadingUsername,
  HeadingEdit,
  HeadingMessage,
  HeadingFollow,
  HeadingStatistics,
  HeadingStatisticsNumber,
  HeadingStatisticsWrap,
  HeadingFullName,
} from "./styles/profile-heading";
import {
  PostList,
  NoPost,
  PostItem,
  PostModal,
  PostImgWrap,
  PostImg,
  PostWrap,
  PostReactWrap,
  PostReactIcon,
  PostReactNumber,
} from "./styles/post";
import {
  UploadAvatar,
  UploadHead,
  UploadList,
  UploadItem,
  UploadInput,
  UploadLabel,
  UploadButton,
} from "./styles/upload-avatar";
import { forwardRef } from "react";

const Profile = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Profile.LoadingWrap = function ProfileLoadingWrap({ children, ...restProps }) {
  return <LoadingWrap {...restProps}>{children}</LoadingWrap>;
};

Profile.Loading = function ProfileLoading({ children, ...restProps }) {
  return <Loading {...restProps}>{children}</Loading>;
};

Profile.Separate = function ProfileSeparate({ children, ...restProps }) {
  return <Separate {...restProps}>{children}</Separate>;
};

Profile.Error = function ProfileError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

// Profile Heading
Profile.HeadingWrap = function ProfileHeadingWrap({ children, ...restProps }) {
  return <HeadingWrap {...restProps}>{children}</HeadingWrap>;
};

Profile.HeadingAvatar = function ProfileHeadingAvatar({ src, ...restProps }) {
  return <HeadingAvatar src={src} {...restProps} />;
};

Profile.HeadingInfor = function ProfileHeadingInfor({
  children,
  ...restProps
}) {
  return <HeadingInfor {...restProps}>{children}</HeadingInfor>;
};

Profile.HeadingUsernameWrap = function ProfileHeadingUsernameWrap({
  children,
  ...restProps
}) {
  return <HeadingUsernameWrap {...restProps}>{children}</HeadingUsernameWrap>;
};

Profile.HeadingUsername = function ProfileHeadingUsername({
  children,
  ...restProps
}) {
  return <HeadingUsername {...restProps}>{children}</HeadingUsername>;
};

Profile.HeadingEdit = function ProfileHeadingEdit({ children, ...restProps }) {
  return <HeadingEdit {...restProps}>{children}</HeadingEdit>;
};

Profile.HeadingMessage = function ProfileHeadingMessage({
  children,
  ...restProps
}) {
  return <HeadingMessage {...restProps}>{children}</HeadingMessage>;
};

Profile.HeadingFollow = function ProfileHeadingFollow({
  children,
  ...restProps
}) {
  return <HeadingFollow {...restProps}>{children}</HeadingFollow>;
};

Profile.HeadingStatistics = function ProfileHeadingStatistics({
  children,
  ...restProps
}) {
  return <HeadingStatistics {...restProps}>{children}</HeadingStatistics>;
};

Profile.HeadingStatisticsNumber = function ProfileHeadingStatisticsNumber({
  children,
  ...restProps
}) {
  return (
    <HeadingStatisticsNumber {...restProps}>{children}</HeadingStatisticsNumber>
  );
};

Profile.HeadingStatisticsWrap = function ProfileHeadingStatisticsWrap({
  children,
  ...restProps
}) {
  return (
    <HeadingStatisticsWrap {...restProps}>{children}</HeadingStatisticsWrap>
  );
};

Profile.HeadingFullName = function ProfileHeadingFullName({
  children,
  ...restProps
}) {
  return <HeadingFullName {...restProps}>{children}</HeadingFullName>;
};

// Profile Posts
Profile.PostList = function ProfilePostList({ children, ...restProps }) {
  return <PostList {...restProps}>{children}</PostList>;
};

Profile.NoPost = function ProfileNoPost({ children, ...restProps }) {
  return <NoPost {...restProps}>{children}</NoPost>;
};

Profile.PostItem = function ProfilePostItem({ children, ...restProps }) {
  return <PostItem {...restProps}>{children}</PostItem>;
};

Profile.PostModal = function ProfilePostModal({ children, ...restProps }) {
  return <PostModal {...restProps}>{children}</PostModal>;
};

Profile.PostImgWrap = function ProfilePostImgWrap({ children, ...restProps }) {
  return <PostImgWrap {...restProps}>{children}</PostImgWrap>;
};

Profile.PostImg = function ProfilePostImg({ src, ...restProps }) {
  return <PostImg src={src} {...restProps} />;
};

Profile.PostWrap = function ProfilePostWrap({ children, ...restProps }) {
  return <PostWrap {...restProps}>{children}</PostWrap>;
};

Profile.PostReactWrap = function ProfilePostReactWrap({
  children,
  ...restProps
}) {
  return <PostReactWrap {...restProps}>{children}</PostReactWrap>;
};

Profile.PostReactIcon = function ProfilePostReactIcon({
  children,
  ...restProps
}) {
  return <PostReactIcon {...restProps}>{children}</PostReactIcon>;
};

Profile.PostReactNumber = function ProfilePostReactNumber({
  children,
  ...restProps
}) {
  return <PostReactNumber {...restProps}>{children}</PostReactNumber>;
};

// upload avatar pop up
Profile.UploadAvatar = function ProfileUploadAvatar({
  children,
  ...restProps
}) {
  return <UploadAvatar {...restProps}>{children}</UploadAvatar>;
};

Profile.UploadHead = function ProfileUploadHead({ children, ...restProps }) {
  return <UploadHead {...restProps}>{children}</UploadHead>;
};

Profile.UploadList = function ProfileUploadList({ children, ...restProps }) {
  return <UploadList {...restProps}>{children}</UploadList>;
};

Profile.UploadItem = function ProfileUploadItem({ children, ...restProps }) {
  return <UploadItem {...restProps}>{children}</UploadItem>;
};

Profile.UploadLabel = function ProfileUploadLabel({ children, ...restProps }) {
  return <UploadLabel {...restProps}>{children}</UploadLabel>;
};

Profile.UploadButton = function ProfileUploadButton({
  children,
  ...restProps
}) {
  return <UploadButton {...restProps}>{children}</UploadButton>;
};

Profile.UploadInput = forwardRef(function ProfileUploadInput(
  { ...restProps },
  ref,
) {
  return <UploadInput ref={ref} {...restProps} />;
});

export default Profile;
