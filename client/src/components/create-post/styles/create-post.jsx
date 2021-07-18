import styled from "styled-components/macro";

export const Container = styled.div`
  width: 800px;
  background-color: var(--white-color);
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

export const Head = styled.div`
  text-align: center;
  border-bottom: 1px solid #cdcdcd;
  padding: 15px 0;
  position: relative;
`;

export const HeadTitle = styled.h1`
  font-size: 2.5rem;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
`;

export const Body = styled.div`
  height: 100%;
  display: flex;
`;

export const CaptionWrap = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const Username = styled.div`
  font-size: 1.4rem;
  margin-left: 12px;
  font-weight: 600;
`;

export const Error = styled.span`
  text-align: center;
  font-size: 1.4rem;
  color: #ed4956;
`;

export const TextArea = styled.textarea`
  margin: 10px 0;
  resize: none;
  width: 100%;
  height: 150px;
  font-size: 1.4rem;
  padding: 5px 0;
  border: none;
  outline: none;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #777;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const Button = styled.button`
  position: relative;
  margin-top: 10px;
  height: 30px;
  border: none;
  border-radius: 2px;
  color: var(--white-color);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #3a8ffe 0%, #9f58fe 100%);

  ${({ disabled }) => disabled && "filter: brightness(0.6); cursor: default"}
`;

export const UploadFileWrap = styled.div`
  flex: 1;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const FileWrap = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
`;

export const ImageWrap = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border: 2px dashed #ccc;

  ${({ active }) => active && "border: none"}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const FileInfoWrap = styled.div`
  border-radius: 5px;
`;

export const Icon = styled.div`
  font-size: 10rem;
  color: #9658fe;
`;

export const Input = styled.input`
  position: relative;
  top: 2px;
  margin-left: 12px;
  padding: 0 10px;
  font-size: 1.4rem;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid #dbdbdb;
  background-color: #eaecef;
  color: #656789;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: #dedede;
  }
`;

export const CustomButton = styled.button`
  margin-top: 10px;
  height: 30px;
  border: none;
  border-radius: 2px;
  color: var(--white-color);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #3a8ffe 0%, #9f58fe 100%);

  ${({ disabled }) => disabled && "filter: brightness(0.6); cursor: default"}
`;

export const Create = styled.div`
  margin: 30px 0 24px 0;
  height: 116px;
  background-color: var(--white-color);
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 18px;
  display: flex;
  align-items: center;
`;
