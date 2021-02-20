import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }
  
  html, body {
    background-color: #000000;
    color: greenyellow;
    margin: 0;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    border: 1px solid greenyellow;
    border-radius: 3px;
    background-color: #121212;
    padding: 1rem;
    max-width: 90%;
    margin: 1rem auto;
  }
`;

export default GlobalStyles;
