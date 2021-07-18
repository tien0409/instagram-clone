import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeadingWrap = styled.div`
  width: 100%;
  margin: 0 72px;
  display: flex;
  align-items: center;

  @media (max-width: 45.9375em) {
    margin: 0 20px;
  }
`;
export const HeadingAvatar = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  cursor: ${({ cursor }) => (cursor ? "pointer" : "default")};

  @media (max-width: 45.9375em) {
    width: 87px;
    height: 87px;
  }
`;

export const HeadingInfor = styled.div`
  flex: 1;
  margin-left: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 45.9375em) {
    margin-left: 28px;
  }
`;

export const HeadingUsernameWrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 45.9375em) {
    flex-direction: column;
  }
`;

export const HeadingUsername = styled.div`
  font-size: 2.8rem;
  color: var(--text-color);

  @media (max-width: 45.9375em) {
    font-size: 2.2rem;
  }
`;

export const HeadingEdit = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  width: 90px;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  color: #333;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  user-select: none;

  @media (max-width: 45.9375em) {
    margin: 10px;
    width: 100%;
  }
`;

export const HeadingMessage = styled.div`
  position: relative;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  width: 70px;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  color: #333;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 45.9375em) {
    margin: 10px;
    width: 100%;
  }
`;

export const HeadingFollow = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  position: relative;
  height: 30px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  background-color: #0095f6;
  color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 45.9375em) {
    margin: 10px;
    width: 100%;
  }
`;

export const HeadingStatistics = styled.div`
  margin: 24px 0;
  display: flex;

  @media (max-width: 45.9375em) {
    display: none;
  }
`;

export const HeadingStatisticsNumber = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  margin-right: 4px;
`;

export const HeadingStatisticsWrap = styled.p`
  font-size: 1.4rem;
  color: var(--text-color);
  margin-right: 32px;
  cursor: pointer;
`;

export const HeadingFullName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 45.9375em) {
    text-align: center;
    font-size: 1.4rem;
  }
`;
