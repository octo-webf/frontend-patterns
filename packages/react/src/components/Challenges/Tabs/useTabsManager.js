import { useState } from "react";

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;

export function useTabsManager({ initialTab, tabsContent }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return {
    getTabProps: tab => ({
      isActive: tab === activeTab,
      onClick: () => setActiveTab(tab),
      onKeyDown: e => {
        const keyCode = e.keyCode || e.which;

        if (keyCode === SPACE_KEY_CODE) {
          e.preventDefault();
        }

        if (keyCode === ENTER_KEY_CODE || keyCode === SPACE_KEY_CODE) {
          setActiveTab(tab);
        }
      }
    }),
    getContent: tabsContent[activeTab]
  };
}
