import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
:root {
  --text-color: #000;
  --white-color: #fff;
  --black-color: #000;

  --container-width: 976px;
  --header-height: 54px;
  --home-main-width: 614px;
  --suggestion-width: calc(var(--container-width) - var(--home-main-width));
  --inbox-head-height: 60px;
  --inbox-sidebar-width: 350px;
  --inbox-message-width: calc(960px - 350px);
  --setting-sidebar-width: 235px;
  --setting-edit-width: calc(960px - 235px);
}

*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
 }

body, html {
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  background-color: #FAFAFA;
  overflow-x: hidden;
}
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: var(--header-height) auto;
  display: flex;
  justify-content: center;
`;

export default GlobalStyle;
