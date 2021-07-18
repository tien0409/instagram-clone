import styled from "styled-components/macro";
import Skeleton from "react-loading-skeleton";

export const Msg = styled.div`
  position: relative;
  width: var(--inbox-message-width);
  display: flex;
  flex-direction: column;
`;

export const NoMsgWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  width: 100%;
`;

export const NoMsg = styled.div`
  font-size: 2.2rem;
`;

export const NoSubMsg = styled.div`
  margin: 12px 0;
  font-size: 1.4rem;
  color: #8e8e8e;
`;

export const MsgHead = styled.div`
  height: var(--inbox-head-height);
  padding: 18px 38px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
`;

export const MsgHeadAvatar = styled.img`
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
`;

export const MsgHeadInfor = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const MsgHeadName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`;

export const MsgHeadTime = styled.span`
  margin-top: 4px;
  font-size: 1.2rem;
  color: #8e8e8e;
`;

export const MsgWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MsgList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin: 5px 0;
`;

export const MsgLoading = styled(Skeleton)`
  margin-left: ${({ content }) => (content ? "14px" : 0)};
  border-radius: 20px !important;
  // width: ${({ avatar }) =>
    avatar ? "34px !important" : "432px !important"};
  max-width: 432px important;

  ${({ avatar }) => avatar && "display: none !important"};
`;

export const MsgItem = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 22px;

  ${({ self }) =>
    self &&
    `
    justify-content: flex-end;

    ${MsgAvatar} {
      display: none;
    }

    ${MsgContent} {
      background-color: #efefef;
    }
  `}

  &:first-child {
    margin-top: auto;
  }

  &:last-child {
    // margin: 0;
  }
`;

export const MsgAvatar = styled(MsgHeadAvatar)``;

export const MsgContent = styled.div`
  padding: 16px;
  margin-left: 14px;
  // border: 1px solid #cbcbcb;
  border-radius: 20px;
  font-size: 1.4rem;
  overflow-wrap: anywhere;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  margin: 15px 22px;
`;

export const Group = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #cdcdcd;
  border-radius: 20px;
  padding: 12px 65px 12px 20px;
  font-size: 1.4rem;
`;

export const Send = styled.button`
  width: 60px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 10px 0;
  font-size: 1.4rem;
  font-weight: 600;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  color: blue;
`;
