import React from "react";

export const AppShell = ({ children }) => (
  <div className="app-shell">
    <div className="app-shell__container app-shell__container--small" />
    <div className="app-shell__container">{children}</div>
  </div>
);
