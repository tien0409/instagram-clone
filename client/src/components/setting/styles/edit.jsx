import styled from "styled-components/macro";

export const Edit = styled.div`
  width: var(--setting-edit-width);
  padding: 34px;

  ${({ changePassword }) =>
    changePassword &&
    `
      ${EditGroup} {
        align-items: center;
      }     

      ${EditWrap} {
        ${EditText} {
          font-size: 2.3rem;
        }
      }

      ${EditWrap} {
        display: flex;
        align-items: center;
      }

      ${EditInput} {
        height: 40px;
      }

      ${EditButton} {
        width: 140px;
        margin-left: 152px;
        background-color: ${({ disabled }) => disabled && "#262626"};
      }

      ${EditNotify} {
        margin-left: 152px;
        text-align: left;
      }
  `}
`;

export const EditGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: ${({ avatar }) => (avatar ? "flex-start" : "baseline")};
  justify-content: ${({ button }) => button && "center"};
`;

export const EditAvatarWrap = styled.div`
  flex-basis: 120px;
  text-align: right;
  margin-right: 32px;
`;

export const EditAvatar = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const EditInput = styled.input`
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 8px 10px;
  font-size: 1.6rem;
  width: 100%;
  color: #262626;
`;

export const EditText = styled(EditAvatarWrap)`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const EditButton = styled.button`
  position: relative;
  outline: none;
  border: none;
  border-radius: 5px;
  color: var(--white-color);
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "rgba(0, 149, 246, 0.2)" : "rgb(0, 149, 246)"};
  width: 70px;
  height: 30px;
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 700;
`;

export const EditDesc = styled.p`
  color: #8e8e8e;
  font-size: 1.2rem;
  line-height: 1.4;
  margin-top: 12px;
`;

export const EditInputWrap = styled.div`
  width: 53%;
`;

export const EditWrap = styled.div`
  ${EditText} {
    text-align: left;
    font-size: 2rem;
    font-weight: 400;
    cursor: default;
  }

  ${EditDesc} {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-top: 0;
    color: rgba(0, 149, 246);
    font-weight: 500;
    cursor: pointer;
  }
`;

export const EditPopup = styled.div`
  width: 550px;
  height: 234px;
  border-radius: 10px;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${EditButton} {
    margin: 0 16px 16px;
    height: 40px;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #0095f6;
    border: none;
    border-radius: 5px;
    color: var(--white-color);
    outline: none;
    width: auto;
  }

  ${EditInput} {
    display: inline-block;
    height: 18px;
    width: 18px;
  }
`;

export const EditHead = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-bottom: 1px solid #dbdbdb;
`;

export const EditList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 24px;
  width: 100%;
`;

export const EditItem = styled.div`
  font-size: 1.4rem;
  border-width: ${({ border }) => border && "1px 0"};
  border-style: ${({ border }) => border && "solid"};
  border-color: ${({ border }) => border && "#ddd"};
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 4px 0;

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

export const EditLabel = styled.label`
  margin-left: 8px;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const EditNotify = styled.div`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 12px;
  color: ${({ err }) => (err ? "#DD3B45" : "#333")};
`;
