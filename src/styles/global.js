import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }
  
  html, body {
    background-color: #000000;
    background-image: url(${process.env.PUBLIC_URL + '/bg4a.jpg'} );
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    color: greenyellow;
    margin: 10px 0;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    border: 1px solid rgba(173, 255, 47, 0.5);
    border-radius: 5px;
    background-color: rgba(0,0,0,0.85);
    padding: 0 1rem 1rem 1rem;
    max-width: 88%;
    margin: 1rem auto;
  }

  .nav-link a {
    color: greenyellow;
  }

  @media only screen and (min-width: 1000px) {
    .typewriter {
      overflow: hidden;
      border-right: 1px solid greenyellow;
      white-space: nowrap;
      margin: 0 auto;
      animation: 
        typing 0.5s steps(40, end),
        blink-caret .75s step-end infinite;
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: rgba(173, 255, 47, 0.5); }
    }
  }
`;

export default GlobalStyles;
