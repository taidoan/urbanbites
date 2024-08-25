'use client';
import { useState } from "react";
import Filter from "@/components/Filter";
import { Categories } from "./content/categories";
import { MenuItems } from "./content/items";
import { Item } from "@/components/Filter/types";
import MenuItemCard from "./MenuItemCard"
import styles from "@/styles/pages/menus/content.module.scss"
import useMediaQuery from "@/hooks/useMediaQuery";
import Divider from "@/components/Divider";

type ItemProps = {
  items: Item[],
  currentTab: string,
}

const FilterItems = ({ items, currentTab }: ItemProps) => {
  const filteredItems = items.filter(item => item.category === currentTab);

  return(
    <MenuItemCard items={filteredItems}/>
  )
}

const MenuSection = () => {
  const [currentTab, setCurrentTab] = useState<string>(Categories[0].id);
  const [currentDesc, setCurrentDesc] = useState<string>(Categories[0].description || '');

  const isDesktop = useMediaQuery("(min-width: 64em)");

  console.log("Current Tab:", currentTab)
  console.log("Current Desc:", currentDesc)
  
  const categoryHeading =  isDesktop ? (
    <>
      <h2 className={styles.title}>{currentTab}</h2>
      <Divider center={true}/>
      <p className={styles.description}>{currentDesc}</p>
    </>
  ) : '';

  const handleTabSelect = (id: string, description: string) => {
    setCurrentTab(id);
    setCurrentDesc(description);
  };

  return (
    <>
      <section className="menus__filter">
        <div className='content-grid'>
          <Filter tabs={Categories} onTabSelect={handleTabSelect} />
        </div>
      </section>
      <section className="menus__content">
        <div className={`content-grid content-grid--inc-border`}>
          {categoryHeading}
          <div className={`${styles.menuItems}`}>
            <FilterItems items={MenuItems} currentTab={currentTab} />
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuSection;
