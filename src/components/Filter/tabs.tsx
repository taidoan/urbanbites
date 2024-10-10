import { Tab } from "./types";
import { useState, useEffect } from "react";
import styles from './styles.module.scss'
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type TabsProps = {
  tabs: Tab[];
  onSelect: (id: string, description: string) => void;
};

const Tabs = ({ tabs, onSelect }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].id);
  const [currentDesc, setCurrentDesc] = useState<string>(tabs[0].description || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 64em)");

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleSelect = (id: string, description: string) => {
    setSelectedTab(id);
    setCurrentDesc(description)
    onSelect(id, description);

    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set("tab", id)

    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });

    if(!isDesktop) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if(isDesktop){
      setIsDropdownOpen(false)
    } 
  }, [isDesktop])

  useEffect(() => {
    const tabFromQuery = searchParams.get("tab");
    if (tabFromQuery) {
      const foundTab = tabs.find(tab => tab.id === tabFromQuery);
      if (foundTab) {
        setSelectedTab(foundTab.id);
        setCurrentDesc(foundTab.description || '');
      }
    }
  }, [searchParams, tabs]);


  const selectedLabel = tabs.find(tab => tab.id === selectedTab)?.label || "";

  return (
    <>
    <div 
  className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownOpen : ''}`} 
  onClick={() => !isDesktop && setIsDropdownOpen(!isDropdownOpen)}
>
  <span className={styles.selectedLabel}>{selectedLabel}</span>
  <p className={styles.selectedDesc}>{currentDesc}</p>
</div>
    <ul className={styles.filter} style={{ display: isDesktop ? 'flex' : isDropdownOpen ? 'block' : 'none' }}
      >
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            onClick={() => handleSelect(tab.id, tab.description || '')}
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

