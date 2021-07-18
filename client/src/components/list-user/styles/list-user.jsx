import styled from "styled-components/macro";
import { Link as LinkReact } from "react-router-dom";

export const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: var(--white-color);
  border-radius: 10px;
`;

export const Link = styled(LinkReact)`
  text-decoration: none;
`;

export const Head = styled.div`
  height: 41px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const List = styled.div`
  height: calc(400px - 41px);
  padding: 0 16px;
  overflow-y: auto;
`;

export const User = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Info = styled.div`
  padding-left: 14px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--text-color);

  &:hover {
    text-decoration: underline;
  }
`;

export const FullName = styled.div`
  font-size: 1.4rem;
  color: #aa919f;
  margin-top: 2px;
  cursor: default;
`;

export const Remove = styled.button`
  position: relative;
  border: 1px solid #dbdbdb;
  width: 74px;
  font-weight: 600;
  height: 30px;
  font-size: 1.4rem;
  background-color: var(--white-color);
  outline: none;
  cursor: pointer;
  display: ${({ hidden }) => (hidden ? "none" : "inline-block")};
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2.2rem;
  cursor: pointer;
`;
