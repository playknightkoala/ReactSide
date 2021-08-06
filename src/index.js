import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

ReactDOM.render(
  <BrowserRouter>
    <Switch>{renderRoutes(Router)}</Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
