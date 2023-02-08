import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  :focus {
    outline: none;
}
}

body{
  background-color: #000000;
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

h1, h2, p, a{
  color: #fff;
  text-decoration: none;
}
`;
export default GlobalStyles;