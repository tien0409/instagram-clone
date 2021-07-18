import styled from "styled-components/macro";
import { Link as ReactLink } from "react-router-dom";

export const DownloadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DownloadText = styled.div`
  font-size: 1.4rem;
  margin: 22px 0;

  @media (max-width: 28.125em) {
    margin: 10px 0;
  }
`;
export const DownloadOS = styled.div``;
export const DownloadLink = styled(ReactLink)``;
export const DownloadImg = styled.img`
  width: 132px;
  margin: 0 4px;

  @media (max-width: 28.125em) {
    width: 100px;
  }
`;
