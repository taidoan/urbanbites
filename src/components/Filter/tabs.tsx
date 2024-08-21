import { Tab } from "./types";
import { useState, useEffect } from "react";

type TabsProps = {
  tabs: Tab[];
  onSelect: (id: string) => void;
};

const Tabs = ({ tabs, onSelect }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].id);

  const handleSelect = (id: string) => {
    setSelectedTab(id);
    onSelect(id);
  };

  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            onClick={() => handleSelect(tab.id)}
            className={`tab ${selectedTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
