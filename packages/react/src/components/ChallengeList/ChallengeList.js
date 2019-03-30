import React from "react";
import { NavLink } from "react-router-dom";

export const ChallengeList = () => (
  <ul>
    <li className="challenge-list-item">
      <div className="challenge-list-item__smooth-angle-top" />
      <div className="echallenge-list-item__smooth-angle-bottom" />
      <NavLink to="/tabs">Tabs</NavLink>
    </li>
  </ul>
);
