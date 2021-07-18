import styled, { keyframes } from "styled-components/macro";

const spinnerAnimation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg)
  } 100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg)
  }
`;

export const Container = styled.div`
  &:before {
    content: "";
    animation: 0.5s linear infinite ${spinnerAnimation};
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #1c87c9;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) translate(-50%, -50%);
    will-change: transform;

    ${({ size }) => {
      switch (size) {
        case "sm":
          return `
            border-width: 4px;
            width: 1rem;
            height: 1rem;
          `;
        case "md":
          return `
            border-width: 7px;
            width: 3rem;
            height: 3rem;
          `;
        case "lg":
          return `
            border-width: 10px;
            width: 6rem;
            height: 6rem;
          `;
        default:
          return `
            border-width: 4px;
            width: 1rem;
            height: 1rem;
          `;
      }
    }}

    ${({ color }) => {
      switch (color) {
        case "white":
          return `
            border-color: #cfd0d1;
            border-bottom-color: var(--white-color);
          `;
        case "black":
          return `
            border-color: #555;
            border-bottom-color: var(--black-color);
          `;
        default:
          return `
            border-color: #cfd0d1;
            border-bottom-color: var(--white-color);
          `;
      }
    }}
  }
`;
