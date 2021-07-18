import { Container, Body } from "./styles/modal";

const Modal = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Modal.Body = function ModalBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

export default Modal;
