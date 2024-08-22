'use client';
import { useState } from "react";
import Filter from "@/components/Filter";
import { Categories } from "./content/categories";
import { MenuItems } from "./content/items";
import { Item } from "@/components/Filter/types";
import MenuItemCard from "./MenuItemCard"
import styles from "@/styles/pages/menus/content.module.scss"

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

  const handleTabSelect = (id: string) => {
    setCurrentTab(id);
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
          <div className={`${styles.menuItems}`}>
            <FilterItems items={MenuItems} currentTab={currentTab} />
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuSection;
