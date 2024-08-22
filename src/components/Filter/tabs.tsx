import { Tab } from "./types";
import { useState } from "react";
import styles from './styles.module.scss'

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
    <ul className={styles.filter}>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            onClick={() => handleSelect(tab.id)}
            className={`${styles.tab} ${selectedTab === tab.id ? `${styles.tabActive}` : ""}`}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
