import styled from "styled-components/macro";
import { Link as LinkReact } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const Container = styled.div`
  max-width: var(--suggestion-width);
  width: 100%;
  margin-top: 30px;
  padding: 20px 0 20px 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 62.4375em) {
    display: none;
  }
`;

export const Link = styled(LinkReact)`
  text-decoration: none;
  color: var(--text-color);
`;

export const MyInfor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const MyAvatar = styled.img`
  width: 58px;
  border-radius: 50%;
`;

export const MyNameWrap = styled.div`
  margin-left: 16px;
`;

export const MyName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const MyFullName = styled.div`
  margin-top: 4px;
  font-size: 1.5rem;
  font-weight: 300;
  color: #777;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadingText = styled.div`
  font-size: 1.5rem;
  color: #8e8e8e;
  font-weight: 600;
`;

export const HeadingSeeAll = styled.div`
  color: var(--text-color);
  font-size: 1.3rem;
  font-weight: 600;
`;

export const SuggestedList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 230px;
`;

export const SuggestedItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SuggestedWrapInfor = styled.div`
  display: flex;
  align-items: center;
`;

export const SuggestedDetails = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
`;

export const SuggestedAvatar = styled(MyAvatar)`
  width: 34px;
`;

export const SuggestedName = styled(MyName)``;

export const SuggestedDesc = styled(MyFullName)`
  font-size: 1.3rem;
  cursor: grab;
`;

export const SuggestedFollow = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #0095f6;
  cursor: pointer;
`;

export const Loading = styled(Skeleton)``;
