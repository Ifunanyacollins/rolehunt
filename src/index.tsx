import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import awsExports from "./aws-exports";
import "./style/app.css";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
