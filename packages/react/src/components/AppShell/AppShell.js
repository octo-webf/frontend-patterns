import React from "react";
import { ChallengeList } from "../ChallengeList";

export const AppShell = ({ children }) => (
  <div className="app-shell">
    <div className="app-shell__container app-shell__container--small">
      <nav className="navleft">
        <ul className="navleft__list">
          <ChallengeList />
        </ul>
      </nav>
    </div>
    <div className="app-shell__container">{children}</div>
  </div>
);
