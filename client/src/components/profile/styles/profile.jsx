import styled from "styled-components/macro";
import { Container as ContainerGlobal } from "../../../globalStyles";
import Skeleton from "react-loading-skeleton";

export const Container = styled(ContainerGlobal)`
  margin-top: calc(var(--header-height) + 32px);
  flex-direction: column;

  @media (max-width: 45.9375em) {
    margin-top: calc(var(--header-height) + 20px);
  }
`;

export const Separate = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dbdbdb;
  margin: 46px 0;
`;

export const Error = styled.div`
  margin-top: calc(var(--header-height) + 22px) auto 22px;
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
`;

export const Loading = styled(Skeleton)``;
export const LoadingWrap = styled.div`
  margin: 8px;
  position: relative;
`;
