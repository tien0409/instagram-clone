import { Container } from "./styles/spinner";

const Spinner = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Spinner;
