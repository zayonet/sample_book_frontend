import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0

  }
  *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }

  html, body, #root {
      height: 100%;
  }

  body{
    font-family: 'Roboto', sans-serif;
    
  }
  
`;
