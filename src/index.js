// Name: Gavin Li
// Course: WEBD-2013 (271014) Web Development 2
// Assignment 5: React
// Date: 2025-07-07

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
