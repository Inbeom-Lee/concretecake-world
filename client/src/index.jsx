import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import App from "./App";
import Preloader from "./app/Preloader";
import store from "./app/store";
import { GlobalTheme, GlobalStyle } from "Theme/index";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={GlobalTheme}>
        <Provider store={store}>
          <Preloader>
            <App />
          </Preloader>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </>
);
