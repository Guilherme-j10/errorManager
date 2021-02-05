import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    outline: none;
    list-style: none;
    text-decoration: none;  
    box-sizing: border-box; 
    border: none;
    font-family: 'Nunito', sans-serif;

    > body {
      > img {
        max-width: 100%;
      }
    }
  }
`;

export default GlobalStyle;