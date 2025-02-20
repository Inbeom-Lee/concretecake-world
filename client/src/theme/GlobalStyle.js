import { createGlobalStyle } from "styled-components";
import { GlobalTheme } from "./GlobalTheme";
import "./fontCSS.css";
import svgStar from "Assets/icons/icon_MousePointer.svg";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "MaxiRound";
    font-size: 15px;
    font-weight: 400;
    cursor: url(${svgStar}), auto;
    
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }  
  }
  div {
    /* &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }   */
  }
  input {
    font-family: "MaxiRound";

    &:focus {
    outline: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  select {
    font-family: "MaxiRound";
  }
  textarea {
    font-family: "MaxiRound";
  }
  button {
    font-family: "MaxiRound";
  }
`;
