import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: #fff;
    font-size: 18px; /* Increased base font size */
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
