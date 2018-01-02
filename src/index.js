import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import quotes from "./quotes";

const quote = () => {
  return quotes[Math.floor(Math.random() * 9)];
};

ReactDOM.render(
  <BrowserRouter>
    <App quote={quote()} />
  </BrowserRouter>,
  document.getElementById("root")
);
