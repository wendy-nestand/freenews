import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App></App>);

// ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));
