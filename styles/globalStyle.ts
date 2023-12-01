import { createGlobalStyle } from "styled-components";

export const device = {
  tablet: `(min-width: 768px) and (max-width: 1199px)`,
  mobile: `(max-width: 767px)`,
};

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #6d6afe;
    --red: #ff5b56;
    --black: #111322;
    --white: #fff;
    --gray100: #373740;
    --gray60: #9fa6b2;
    --gray20: #ccd5e3;
    --gray10: #e7effb;
    --background: #f0f6ff;
  }
  
html {
    font-size: 62.5%;
  }
  
  body {
    background: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  fieldset,
  input,
  label {
    all: unset;
  }
  
  button {
    background: none;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  #root {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
