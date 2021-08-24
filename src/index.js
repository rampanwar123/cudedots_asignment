import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import App from "./App";

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
