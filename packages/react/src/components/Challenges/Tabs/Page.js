import React from "react";

import { useTabsManager } from "./useTabsManager";
import { Tabs, Tab } from "./Tabs";

const TabContentTemplate = ({ imageUrl, title, articleUrl }) => (
  <div>
    <div className="tab-content__header">
      <img alt={`${title} header illustration`} src={imageUrl} />
      <h2>{title}</h2>
    </div>
    <iframe title={`${title} summary`} src={articleUrl} />
  </div>
);

export const TabsPage = () => {
  const { getContent, getTabProps } = useTabsManager({
    initialTab: "australia",
    tabsContent: {
      norway: () => (
        <TabContentTemplate
          imageUrl="https://images.unsplash.com/photo-1506701160839-34cfdecaf53c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          title="Norway"
          articleUrl="https://en.m.wikipedia.org/wiki/Norway"
        />
      ),
      australia: () => (
        <TabContentTemplate
          imageUrl="https://images.unsplash.com/photo-1529029411565-e04366ee3cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          title="Australia"
          articleUrl="https://en.m.wikipedia.org/wiki/Australia"
        />
      ),
      japan: () => (
        <TabContentTemplate
          imageUrl="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1969&q=80"
          title="Japan"
          articleUrl="https://en.m.wikipedia.org/wiki/Japan"
        />
      )
    }
  });

  return (
    <div className="challenge-shell">
      <div className="challenge-shell__part">
        <div className="challenge-shell__description">
          <div className="challenge-shell__title">Tabs</div>
          <div className="challenge-shell__subtitle">
            The goal of this challenge is to implement a highly customizable and
            accessible tab component. These are the specifications for the Tab
            component :
          </div>

          <ul className="challenge-shell__rules">
            <li>
              The component must be accessible and usable using the keyboard
            </li>
            <li>
              The Tab component should not give constrains on the rendering. For
              instance, the consumer must be able to render the tab buttons on
              the left or at the bottom
            </li>
          </ul>
        </div>
      </div>
      <div className="challenge-shell__part challenge-tabs">
        <Tabs>
          <Tab {...getTabProps("norway")}>Norway</Tab>
          <Tab
            {...getTabProps("australia", {
              style: { fontWeight: "bold" }
            })}
          >
            Australia
          </Tab>
          <Tab
            {...getTabProps("japan", {
              onClick: e => console.log("ClickEvent:", e)
            })}
          >
            Japan
          </Tab>
        </Tabs>
        <div className="tab-content">{getContent()}</div>
      </div>
    </div>
  );
};
