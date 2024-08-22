import { Tab } from "./types";
import { useState, useEffect } from "react";
import styles from './styles.module.scss'
import useMediaQuery from "@/hooks/useMediaQuery";

type TabsProps = {
  tabs: Tab[];
  onSelect: (id: string) => void;
};

const Tabs = ({ tabs, onSelect }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 64em)");

  const handleSelect = (id: string) => {
    setSelectedTab(id);
    onSelect(id);
    if(!isDesktop) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if(isDesktop){
      setIsDropdownOpen(false)
    } 
  }, [isDesktop, isDropdownOpen])

  const selectedLabel = tabs.find(tab => tab.id === selectedTab)?.label || "";

  return (
    <>
    <div className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownOpen : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <span>{selectedLabel}</span>
    </div>
    <ul className={styles.filter} style={{ display: isDesktop ? 'flex' : isDropdownOpen ? 'block' : 'none' }}
      >
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
    </>
  );
};

export default Tabs;
