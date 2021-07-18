import styled from "styled-components/macro";
import { Container as ContainerGlobal } from "../../../globalStyles";

export const Container = styled(ContainerGlobal)`
  // height: calc(100vh - 22 * 2px - var(--header-height));
  max-height: 882px;
  height: 882px;
  margin: calc(var(--header-height) + 22px) auto 22px;
  background-color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 3px;

  @media (max-width: 58.4375em) {
    margin: var(--header-height) 0 0;
    border-top: none;
  }
`;

export const Error = styled.div`
  margin: calc(var(--header-height) + 22px) auto 22px;
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
`;
