import { useState } from "react";

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;

const noop = () => {};

export function useTabsManager({ initialTab, tabsContent }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return {
    getTabProps: (
      tab,
      {
        onClick: userOnClick = noop,
        onKeyDown: userOnKeyDown = noop,
        ...additionalProps
      } = {}
    ) => ({
      isActive: tab === activeTab,
      onClick: e => {
        setActiveTab(tab);
        userOnClick(e);
      },
      onKeyDown: e => {
        const keyCode = e.keyCode || e.which;

        if (keyCode === SPACE_KEY_CODE) {
          e.preventDefault();
        }

        if (keyCode === ENTER_KEY_CODE || keyCode === SPACE_KEY_CODE) {
          setActiveTab(tab);
        }

        userOnKeyDown(e);
      },
      ...additionalProps
    }),
    getContent: tabsContent[activeTab]
  };
}
