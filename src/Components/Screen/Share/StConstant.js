import React from "react";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0 0 0 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  button, input, textarea, li {
    outline: none;
  }
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
