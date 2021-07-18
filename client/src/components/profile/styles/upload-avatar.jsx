import styled, { keyframes } from "styled-components/macro";

const animationAppear = keyframes`
  from {
    transform: scale(1.1);
  } to {
    transform: scale(1);
  } `;

export const UploadAvatar = styled.div`
  background-color: var(--white-color);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 405px;
  height: 224px;
  animation: ${animationAppear} 0.04s ease-in;

  ${({ modal }) => modal && "display: none"}
`;

export const UploadHead = styled.h2`
  flex: 1;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadItem = styled.div`
  font-size: 1.4rem;
  border-width: ${({ border }) => border && "1px 0"};
  border-style: ${({ border }) => border && "solid"};
  border-color: ${({ border }) => border && "#ddd"};
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

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  margin-left: 8px;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const UploadButton = styled.button`
  margin: 0 16px 18px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: #0095f6;
  border: none;
  border-radius: 5px;
  color: var(--white-color);
  outline: none;
`;
