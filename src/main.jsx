import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/global.js";
import { Home } from "./pages/home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global />
    <Home />
  </React.StrictMode>
);
