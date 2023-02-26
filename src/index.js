import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Routes";

const HTML = document.getElementById("root");
const root = createRoot(HTML);

root.render(<Router />);
