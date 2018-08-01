import React from "react";
import ReactDom from "react-dom";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import { normalize } from "styled-normalize";
import { App } from "./App";
import { globalStyles } from "./ui/theme";

const rootElement = document.getElementById("root");

// eslint-disable-next-line no-unused-expressions
injectGlobal`${normalize} ${globalStyles}`;

const render = () => {
  ReactDom.render(
    <React.Fragment>
      <Helmet titleTemplate="audit-test" />
      <App />
    </React.Fragment>,
    rootElement
  );
};

render();
