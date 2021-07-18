import styled from "styled-components/macro";
import { Container as ContainerGlobal } from "../../../globalStyles";
import { Link as LinkReact } from "react-router-dom";

export const Container = styled(ContainerGlobal)`
  max-height: 882px;
  height: 882px;
  margin: calc(var(--header-height) + 22px) auto 22px;
  background-color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 58.4375em) {
    margin: var(--header-height) 0 0;
    border-top: none;
  }
`;

export const Link = styled(LinkReact)`
  text-decoration: none;
`;
