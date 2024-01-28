import { createGlobalStyle } from "styled-components";
// import "modern-normalize";
import "modern-normalize/modern-normalize.css";
/* *, already in normalize
*::before,
*::after {
  box-sizing: border-box;
} */
export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

 p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,ol  {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
