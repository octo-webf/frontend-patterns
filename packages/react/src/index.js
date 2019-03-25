import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AppShell } from "./components/AppShell";
import { Home } from "./components/Home";
import { TabsPage } from "./components/Challenges/Tabs";

ReactDOM.render(
  <BrowserRouter>
    <AppShell>
      <Switch>
        <Route path="/tabs" component={TabsPage} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </AppShell>
  </BrowserRouter>,
  document.getElementById("root")
);
