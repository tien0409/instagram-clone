import styled from "styled-components/macro";

export const Sidebar = styled.div`
  width: 235px;
  border-right: 1px solid #dbdbdb;
`;

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.div`
  height: 50px;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--text-color);
  line-height: 50px;
  padding-left: 30px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #f7f7f7;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 2.5px;
      background-color: #dbdbdb;
    }
  }
  ${({ active }) =>
    active &&
    `
      font-weight: 700;
  
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 2.5px;
        background-color: var(--black-color);
      }

      &:hover {
        background-color: transparent;
        &:before {
          background-color: var(--black-color);
        }
      }
  `}
`;
