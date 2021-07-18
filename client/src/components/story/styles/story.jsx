import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  margin: 30px 0 24px 0;
  height: 116px;
  background-color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

export const PersonList = styled.div`
  padding: 18px;
  display: flex;
  overflow-x: auto;
  position: relative;
  scroll-behavior: smooth;
  transition: all 0.5s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Person = styled(Link)`
  width: 60px;
  margin-right: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

export const AvatarWrap = styled.div`
  padding: 1.4px;
  position: relative;
  background: linear-gradient(to right, red, purple);
  border-radius: 50%;
`;

export const Avatar = styled.img`
  padding: 4px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: #fff;
`;
export const Name = styled.span`
  margin-top: 4px;
  color: #5f5f5f;
  font-size: 1.3rem;
  text-align: center;
`;

export const Next = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: var(--white-color);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: none;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 4px;
    border: solid rgba(0, 0, 0, 0.5);
    border-width: 0 3px 3px 0;
    padding: 3px;
    transform: rotate(-45deg) translateY(-50%);
  }

  ${({ next }) =>
    next &&
    `
      display: inline-block;
    `}
`;

export const Prev = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: var(--white-color);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: none;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 11px;
    border: solid rgba(0, 0, 0, 0.5);
    border-width: 0 3px 3px 0;
    padding: 3px;
    transform: rotate(135deg) translateY(50%);
  }

  ${({ prev }) =>
    prev &&
    `
      display: inline-block;
    `}
`;
