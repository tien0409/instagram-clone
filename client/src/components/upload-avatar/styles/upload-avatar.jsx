import styled from "styled-components/macro";

export const Container = styled.div`
  width: 405px;
  height: 224px;
  background-color: var(--white-color);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ${({ modal }) => modal && "display: none"}
`;

export const Head = styled.h2`
  flex: 1;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  font-size: 1.4rem;
  border-width: 1px 0;
  border-style: solid;
  border-color: #ddd;
  padding: 14px 0;
  cursor: pointer;
  position: relative;

  ${({ color }) => {
    switch (color) {
      case "blue":
        return "color: #0095F6; font-weight: 600";
      case "gray":
        return "color: #444; font-weight: 600";
      default:
        return "";
    }
  }}
`;

export const Input = styled.input`
  display: none;
`;

export const Wrap = styled.div`
  width: 700px;
  height: 650px;
  background-color: var(--white-color);
  display: none;
  flex-direction: column;
  border-radius: 7px;

  ${({ modal }) => modal && "display: flex"}
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
`;

export const AvatarWrap = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  border-top: 1px solid #e5e5e5;
  height: 60px;
  padding: 0 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 110px;
  height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  ${({ variant }) => {
    switch (variant) {
      case "save":
        return `
          background-color: #1877f2;
          color: var(--white-color);
        `;
      case "cancel":
        return `
          background-color: var(--white-color);
          color: #1877f2;
        `;
      default:
        return "";
    }
  }}

  ${({ disabled }) => disabled && "filter: grayscale(70%); cursor: default"}
`;
