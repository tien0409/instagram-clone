import { forwardRef } from "react";
import {
  Container,
  Head,
  HeadTitle,
  Body,
  CaptionWrap,
  InfoWrap,
  Avatar,
  Username,
  TextArea,
  Button,
  CustomButton,
  UploadFileWrap,
  ImageWrap,
  Image,
  FileInfoWrap,
  Icon,
  Input,
  FileWrap,
  CloseButton,
  Create,
  Error,
} from "./styles/create-post";

const CreatePost = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

CreatePost.Head = function CreatePostHead({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>;
};

CreatePost.HeadTitle = function CreatePostTitle({ children, ...restProps }) {
  return <HeadTitle {...restProps}>{children}</HeadTitle>;
};

CreatePost.Body = function CreatePostBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

CreatePost.CaptionWrap = function CreatePostCaptionWrap({
  children,
  ...restProps
}) {
  return <CaptionWrap {...restProps}>{children}</CaptionWrap>;
};

CreatePost.InfoWrap = function CreatePostInfoWrap({ children, ...restProps }) {
  return <InfoWrap {...restProps}>{children}</InfoWrap>;
};

CreatePost.Avatar = function CreatePostAvatar({ src, ...restProps }) {
  return <Avatar src={src} {...restProps} />;
};

CreatePost.Username = function CreatePostUsername({ children, ...restProps }) {
  return <Username {...restProps}>{children}</Username>;
};

CreatePost.TextArea = function CreatePostTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

CreatePost.Button = function CreatePostButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

CreatePost.UploadFileWrap = function CreatePostUploadFileWrap({
  children,
  ...restProps
}) {
  return <UploadFileWrap {...restProps}>{children}</UploadFileWrap>;
};

CreatePost.ImageWrap = function CreatePostImageWrap({
  children,
  ...restProps
}) {
  return <ImageWrap {...restProps}>{children}</ImageWrap>;
};

CreatePost.Image = function CreateImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

CreatePost.FileInfoWrap = function CreatePostFileInfoWrap({
  children,
  ...restProps
}) {
  return <FileInfoWrap {...restProps}>{children}</FileInfoWrap>;
};

CreatePost.Icon = function CreatePostIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

CreatePost.Input = forwardRef(function CreatePostInput({ ...restProps }, ref) {
  return <Input ref={ref} {...restProps} />;
});

CreatePost.CustomButton = function CreatePostCustomButton({
  children,
  ...restProps
}) {
  return <CustomButton {...restProps}>{children}</CustomButton>;
};

CreatePost.FileWrap = function CreatePostFileWrap({ children, ...restProps }) {
  return <FileWrap {...restProps}>{children}</FileWrap>;
};

CreatePost.CloseButton = function CreatePostCloseButton({
  children,
  ...restProps
}) {
  return <CloseButton {...restProps}>{children}</CloseButton>;
};

CreatePost.Create = function CreatePostCreate({ children, ...restProps }) {
  return <Create {...restProps}>{children}</Create>;
};

CreatePost.Error = function CreatePostError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

export default CreatePost;
