import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { AppShell } from "./components/AppShell";
import { Home } from "./components/Home";

ReactDOM.render(
  <AppShell>
    <Home />
  </AppShell>,
  document.getElementById("root")
);
