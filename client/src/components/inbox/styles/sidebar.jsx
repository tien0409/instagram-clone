import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Sidebar = styled.div`
  min-width: var(--inbox-sidebar-width);
  border-right: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
`;
export const SidebarHead = styled.div`
  height: var(--inbox-head-height);
  padding: 20px 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
`;

export const SidebarList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const SidebarItem = styled(Link)`
  padding: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  position: relative;
  background-color: var(--white-color);

  &:hover {
    background-color: #f2f2f2;
  }

  ${({ unread, active }) => {
    if (active) {
      return `
        background-color: #efefef;
        cursor: text;

        &:hover {
          background-color: #efefef;
        }

        ${SidebarInfor} {
          cursor: text;
        }
      `;
    } else if (unread) {
      return `
        ${SidebarName}, ${SidebarMsgWrap} {
          font-weight: 500;
          color: var(--text-color);
        }

        &:before {
          position: absolute;
          top: 50%;
          right: 15px;
          content: "";
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background-color: #0095F6;
          transform: translateY(-50%);
        }
      `;
    }
  }};
`;

export const SidebarAvatar = styled.img`
  width: 56px;
  border-radius: 50%;
`;

export const SidebarInfor = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;

export const SidebarName = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const SidebarMsgWrap = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: 300;
  font-size: 1.4rem;
  color: #a6919d;
`;

export const SidebarMsg = styled.div``;

export const SidebarTime = styled.span`
  margin-left: 12px;
  font-size: 1.2rem;
`;
