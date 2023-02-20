import React from "react";
import { createRoot } from "react-dom/client";

import Leftbar from "./Components/leftbar";

const HTML = document.getElementById("root");
const root = createRoot(HTML);

root.render(<Leftbar />);
