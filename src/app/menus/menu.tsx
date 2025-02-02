'use client';
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import { Categories, MenuItems, DrinkCategories } from "@/content/menu";
import { Item } from "@/components/Filter/types";
import MenuItemCard from "./components/MenuItemCard"
import styles from "@/styles/pages/menus/content.module.scss"
import useMediaQuery from "@/hooks/useMediaQuery";
import Divider from "@/components/Divider";

const FilterItems = ({ items, currentTab }: { items: Item[], currentTab: string}) => {
  const filteredItems = items.filter(item => item.category === currentTab);

  const groupedItems = filteredItems.reduce((groups, item) => {
    const drinkCategory = item.drinkCategory || 'Unknown Category';
    if (!groups[drinkCategory]) {
      groups[drinkCategory] = [];
    }
    groups[drinkCategory].push(item);
    return groups;
  }, {} as Record<string, Item[]>);

  if(currentTab === 'drinks'){
    return (
      <>
        {Object.keys(groupedItems).map((drinkCategory) => (
          <div key={drinkCategory} className={styles.subCategory}>
            <div>
              <h2 className={`${styles.title} ${styles.titleSmall}`}>{drinkCategory}</h2>
              <Divider />
              <p>{DrinkCategories [drinkCategory] || "No description available."}</p>
            </div>
            <MenuItemCard items={groupedItems[drinkCategory]} />
          </div>
        ))}
      </>
    );
  } else {
    return(
      <MenuItemCard items={filteredItems}/>
    )
  }
}

const MenuSection = () => {

  const [currentTab, setCurrentTab] = useState<string>(Categories[0].id);
  const [currentDesc, setCurrentDesc] = useState<string>(Categories[0].description || '');

  const isDesktop = useMediaQuery("(min-width: 64em)");
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

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', id);
      window.history.pushState({}, '', url);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const tab = queryParams.get('tab') || Categories[0].id;
      setCurrentTab(tab);
      const description = Categories.find(category => category.id === tab)?.description || '';
      setCurrentDesc(description);
    }
  }, []);

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
