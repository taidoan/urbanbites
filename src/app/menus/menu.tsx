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

const drinkCategoryDescriptions: Record<string, string> = {
  "chocolate": "Indulge in our rich and creamy chocolate drinks, crafted to perfection.",
  "tea": "Explore a variety of fine teas, each brewed to bring out the unique flavors.",
  "coffee": "Savor our expertly brewed coffee, made from the finest roasted beans.",
  "soft drinks": "Refresh yourself with our selection of chilled, carbonated beverages.",
  "fruit juice": "Enjoy the natural sweetness of freshly squeezed fruit juices.",
  "beer & cider": "Discover our handpicked selection of craft beers and ciders.",
  "wine": "Curated wines to complement your meal, perfect for any occasion.",
  "smoothies": "A refreshing blend of fruits and yogurt, perfect for a healthy treat."
};

const FilterItems = ({ items, currentTab }: ItemProps) => {
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
              <p>{drinkCategoryDescriptions[drinkCategory] || "No description available."}</p>
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
