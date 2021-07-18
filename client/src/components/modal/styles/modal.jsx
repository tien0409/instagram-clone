import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: none;

  ${({ modal }) => modal && "display: block"}
`;

export const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  display: none;
  animation-delay: 1s;

  ${({ modal }) => modal && "display: block"}
`;
