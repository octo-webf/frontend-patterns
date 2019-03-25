import { useState } from "react";

export const TabsManager = ({ children, initialTab, tabsContent }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTab);

  return children({
    activeTabIndex,
    getTabProps: index => ({
      isActive: index === activeTabIndex,
      onClick: () => setActiveTabIndex(index),
      onKeyUp: e => {
        const keyCode = e.keyCode || e.which;

        if (keyCode === 13 || keyCode === 32) {
          setActiveTabIndex(index);
        }
      }
    }),
    renderContent: () => tabsContent[activeTabIndex]()
  });
};
