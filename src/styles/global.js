import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #e5e5e5;
    color: #383838;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    
    -webkit-font-smoothing: antialiased;
  }

  ul, ol, li {
    list-style: none;
  }

  button, input, textarea {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
