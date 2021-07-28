import { useEffect, useState } from "react";
import {
  Container,
  Wrap,
  ImgWrap,
  ImgList,
  ImgItem,
  BaseWrap,
  Base,
  Title,
  Input,
  Button,
  Separate,
  Link,
  SocialWrap,
  SocialIcon,
  SocialName,
  ForgotPassword,
  Option,
  OptionText,
  OptionLink,
  Error,
} from "./styles/form";
import {
  DownloadWrap,
  DownloadText,
  DownloadOS,
  DownloadLink,
  DownloadImg,
} from "./styles/download";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Wrap = function FormWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

Form.ImgWrap = function FormImgWrap({ children, ...restProps }) {
  return <ImgWrap {...restProps}>{children}</ImgWrap>;
};

Form.ImgList = function FormImgList({ children, ...restProps }) {
  return <ImgList {...restProps}>{children}</ImgList>;
};

Form.ImgItem = function FormImgItem({ ...restProps }) {
  const [imgNumber, setImgNumber] = useState(1);

  useEffect(() => {
    const timerImg = setInterval(() => {
      if (imgNumber === 4) {
        setImgNumber(1);
      } else {
        setImgNumber(imgNumber + 1);
      }
    }, 3000);

    return () => {
      clearInterval(timerImg);
    };
  }, [imgNumber]);

  return (
    <ImgItem
      alt={`image-${imgNumber}`}
      src={`/images/phone${imgNumber}.jpg`}
      {...restProps}
    />
  );
};

Form.BaseWrap = function FormBaseWrap({ children, ...restProps }) {
  return <BaseWrap {...restProps}>{children}</BaseWrap>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.Separate = function FormSeparate({ children, ...restProps }) {
  return <Separate {...restProps}>{children}</Separate>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.SocialWrap = function FormSocialWrap({ children, ...restProps }) {
  return <SocialWrap {...restProps}>{children}</SocialWrap>;
};

Form.SocialIcon = function FormSocialIcon({ children, ...restProps }) {
  return <SocialIcon {...restProps}>{children}</SocialIcon>;
};

Form.SocialName = function FormSocialName({ children, ...restProps }) {
  return <SocialName {...restProps}>{children}</SocialName>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.ForgotPassword = function FormForgotPassword({ children, ...restProps }) {
  return <ForgotPassword {...restProps}>{children}</ForgotPassword>;
};

Form.Option = function FormOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Form.OptionText = function FormOptionText({ children, ...restProps }) {
  return <OptionText {...restProps}>{children}</OptionText>;
};

Form.OptionLink = function FormOptionLink({ children, ...restProps }) {
  return <OptionLink {...restProps}>{children}</OptionLink>;
};

Form.DownloadWrap = function FormDownloadWrap({ children, ...restProps }) {
  return <DownloadWrap {...restProps}>{children}</DownloadWrap>;
};

Form.DownloadText = function FormDownloadText({ children, ...restProps }) {
  return <DownloadText {...restProps}>{children}</DownloadText>;
};

Form.DownloadOS = function FormDownloadOS({ children, ...restProps }) {
  return <DownloadOS {...restProps}>{children}</DownloadOS>;
};

Form.DownloadLink = function FormDownloadLink({ children, ...restProps }) {
  return <DownloadLink {...restProps}>{children}</DownloadLink>;
};

Form.DownloadImg = function FormDownloadImg({ src, ...restProps }) {
  return <DownloadImg src={src} {...restProps} />;
};

export default Form;
