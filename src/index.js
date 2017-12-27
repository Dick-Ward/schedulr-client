import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { observe } from "./Observer";

observe(appointmentPosition => {
  ReactDOM.render(
    <App appointmentPosition={appointmentPosition} />,
    document.getElementById("root")
  );
});
