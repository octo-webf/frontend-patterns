import React from "react";
import classnames from "classnames";

export const Tabs = ({ children }) => <div className="tabs">{children}</div>;

export const Tab = ({ children, isActive, ...props }) => (
  <div
    className={classnames("tabs__tab", {
      "tabs__tab--active": isActive
    })}
    role="button"
    tabIndex={0}
    {...props}
  >
    {children}
  </div>
);
