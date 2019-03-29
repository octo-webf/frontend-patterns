import React from "react";
import { mount } from "enzyme";

import { Tabs, Tab } from "./Tabs";
import { useTabsManager } from "./useTabsManager";

let wrapper;

const TestComponent = () => {
  const { getTabProps, getContent } = useTabsManager({
    initialTab: "tab2",
    tabsContent: {
      tab1: () => <div>Tab 1 content</div>,
      tab2: () => <div>Tab 2 content</div>
    }
  });

  return (
    <>
      <div className="tab-content">{getContent()}</div>
      <Tabs>
        <Tab {...getTabProps("tab1")}>First tab</Tab>
        <Tab {...getTabProps("tab2")}>Second tab</Tab>
      </Tabs>
    </>
  );
};

beforeEach(() => {
  wrapper = mount(<TestComponent />);
});

describe("initial rendering", () => {
  it("should render the provided initial tab", () => {
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 2 content</div>)
    ).toBe(true);
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 1 content</div>)
    ).toBe(false);
  });
});

describe("when clicking tabs", () => {
  it("should render the clicked tab content", () => {
    // Given
    const firstTab = wrapper.find(Tab).at(0);

    // When
    firstTab.simulate("click");

    // Then
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 1 content</div>)
    ).toBe(true);
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 2 content</div>)
    ).toBe(false);
  });
});

describe("when hitting ENTER key", () => {
  it("should render the new tab content", () => {
    // Given
    const firstTab = wrapper.find(Tab).at(0);

    // When
    firstTab.simulate("keyup", { keyCode: 13 });

    // Then
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 1 content</div>)
    ).toBe(true);
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 2 content</div>)
    ).toBe(false);
  });
});

describe("when hitting the SPACE key", () => {
  it("should render the new tab content", () => {
    // Given
    const firstTab = wrapper.find(Tab).at(0);

    // When
    firstTab.simulate("keyup", { keyCode: 32 });

    // Then
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 1 content</div>)
    ).toBe(true);
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 2 content</div>)
    ).toBe(false);
  });
});

describe("when hitting any other key", () => {
  it("should not render the tab content", () => {
    // Given
    const firstTab = wrapper.find(Tab).at(0);

    // When
    firstTab.simulate("keyup", { keyCode: 2 });

    // Then
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 2 content</div>)
    ).toBe(true);
    expect(
      wrapper.find(".tab-content").contains(<div>Tab 1 content</div>)
    ).toBe(false);
  });
});
