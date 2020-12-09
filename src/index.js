import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let el = document.getElementById("app");

const render = () => ReactDOM.render(<App />, el);
render();
