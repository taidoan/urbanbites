'use client'; // Only for this component

import { useState } from "react";
import Filter, { FilterItems } from "@/components/Filter";
import { Categories } from "./content/categories";
import { MenuItems } from "./content/items";

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
        <div className="content-grid content-grid--inc-border">
          <FilterItems items={MenuItems} currentTab={currentTab} />
        </div>
      </section>
    </>
  );
}

export default MenuSection;
