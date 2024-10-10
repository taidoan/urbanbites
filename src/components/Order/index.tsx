'use client'

import Button from "../Button"
import style from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faCircleDown, faCircleUp, faBicycle, faBagShopping, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { Locations } from "@/content/locations"
import { useState, useEffect } from "react"
import { Categories, MenuItems } from "@/content/menu"
import { capitaliseFirstLetter } from "@/utilities/letters"
import MenuItemCard from "@/app/menus/components/MenuItemCard"

const OrderBar = () => {
  return (
    <div className={style.orderBar}>
      <BasketButton />
    </div>
  )
}

const BasketButton = () => {
  return (
    <div className={style.basketButton}>
      <div className={style.basketButtonText}>
        <span className={style.basketLabel}>Basket:</span>
        <span>(£9.99)</span>
      </div>
      <span className={style.basketButtonIcon}>
        <span className={style.basketItemCount}>1</span>
        <FontAwesomeIcon icon={faBasketShopping} />
      </span>
    </div>
  )
}

export const OrderLocation = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [locationSelector, setLocationSelector] = useState(false)

  useEffect(() => {
    if(Locations.length> 0) {
      setCurrentLocation(Locations[0].name)
    }
  }, [])

  const handleLocationSelectorClick = () => {
    setLocationSelector((prev) => !prev);
  }

  const handleSetCurrentLocation = (locationName: string) => {
    setCurrentLocation(locationName);
    setLocationSelector(false);
  }

  const locationSelectorIcon = locationSelector ? faCircleUp : faCircleDown;

  return (
    <>
    <div className={style.locationSelector}>
      <h3>{currentLocation}</h3>
      <span className={style.locationSelectButton} onClick={handleLocationSelectorClick}>
        <FontAwesomeIcon icon={locationSelectorIcon} className={style.locationSelectIcon} />
      </span>
      {locationSelector && <ul className={style.locationSelectorList}>{Locations.map(location => (
        <li key={location.id} onClick={() => handleSetCurrentLocation(location.name)}>{location.name}</li>
      ))}</ul>}
    </div>
    </>
  )
}

export const OrderMethod = () => {
  const [orderMethod, setOrderMethod] = useState("delivery");

  const handleOrderMethodChange = (method: string) => {
    setOrderMethod(method);
  };

  return (
    <div className={style.orderMethod}>
      <button 
        className={`${style.orderMethodOption} ${orderMethod === 'delivery' ? style.orderMethodOptionActive : ''}`} 
        onClick={() => handleOrderMethodChange('delivery')}
      >
        <FontAwesomeIcon icon={faBicycle} />
        Delivery
      </button>
      <button 
        className={`${style.orderMethodOption} ${orderMethod === 'collection' ? style.orderMethodOptionActive : ''}`} 
        onClick={() => handleOrderMethodChange('collection')}
      >
        <FontAwesomeIcon icon={faBagShopping} />
        Collection
      </button>
    </div>
  );
};

export const OrderMenu = () => {
  const [currentCategory, setCurrentCategory] = useState<string>(Categories[0].id)

  const menuItems = MenuItems.filter(item => item.category === currentCategory);

  return (
    <div>
      <OrderMenuCategories currentCategory={currentCategory} onCategoryChange={setCurrentCategory} />

      <MenuItemCard items={menuItems} />
    </div>

  )
}

const OrderMenuCategories = ({ currentCategory, onCategoryChange }: { currentCategory: string, onCategoryChange: (id: string) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen((prev) => !prev);
  }

  const icon = dropdownOpen ? faChevronUp : faChevronDown;

  return (
    <div className={style.orderCategory}>
      <div className={style.currentCategory} onClick={() => handleDropdownClick()}>
        <span className={style.currentCategoryText}>{capitaliseFirstLetter(currentCategory)}</span>
        <FontAwesomeIcon icon={icon} />
      </div>
      {dropdownOpen && 
        <ul className={style.orderCategoryList}>
          {Categories.map((cat) => (
            <li key={cat.id}>
              <button className={style.orderCategoryOption} onClick={() => {onCategoryChange(cat.id); setDropdownOpen(false)}}>{capitaliseFirstLetter(cat.id)}</button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default OrderBar