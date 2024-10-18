'use client'

import style from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faCircleDown, faCircleUp, faBicycle, faBagShopping, faChevronDown, faChevronUp, faCircleXmark, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { Locations } from "@/content/locations"
import { useState, useEffect } from "react"
import { Categories, MenuItems } from "@/content/menu"
import { capitaliseFirstLetter } from "@/utilities/letters"
import MenuItemCard from "@/app/menus/components/MenuItemCard"
import classNames from "classnames"
import useMediaQuery from "@/hooks/useMediaQuery"
import Divider from "../Divider"
import { useSearchParams } from "next/navigation"

const OrderBar = ({ className, basketItems, increaseQuantity, decreaseQuantity }: { className?: string; basketItems: BasketItem[]; increaseQuantity: (id: number) => void; decreaseQuantity: (id: number) => void; }) => {
  const isDesktop = useMediaQuery("(min-width: 64em)");
  const [openBasket, setOpenBasket] = useState(false);

  const handleToggleBasket = () => {
    if (!isDesktop) {
      setOpenBasket(prev => !prev);
    }
  }

  useEffect(() => {
    document.body.classList.toggle('locked', openBasket);
    return () => {
      document.body.classList.remove('locked'); 
    };
  }, [openBasket]);

  useEffect(() => {
    if (isDesktop && openBasket) {
      setOpenBasket(false);
    }
  }, [isDesktop, openBasket]); 

  return (
    <div className={classNames(style.orderBar, className)}>
      <OrderBasket 
        toggleBasket={handleToggleBasket} 
        isOpen={openBasket} 
        basketItems={basketItems} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
      />
      <BasketButton toggleBasket={handleToggleBasket} basketItems={basketItems} />
    </div>
  );
}

type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type OrderBasketProps = {
  className?: string;
  isOpen: boolean;
  toggleBasket?: () => void;
  basketItems: BasketItem[];
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
};

export const OrderBasket = ({
  className,
  toggleBasket,
  isOpen,
  basketItems,
  increaseQuantity,
  decreaseQuantity,
}: OrderBasketProps) => {
  const isDesktop = useMediaQuery("(min-width: 64em)");
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const totalPrice = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const formattedPrice = totalPrice.toFixed(2);

  const toggleItem = (itemId: number) => {
    setExpandedItemId(prevId => (prevId === itemId ? null : itemId));
  };

  return (
    <div className={classNames(style.orderBasket, className, { [style.orderBasketActive]: isOpen })}>
      {!isDesktop ? (
        <>
          <div className={style.basketHeader}>
            <h3 className={style.basketTitle}>Basket</h3>
            <FontAwesomeIcon icon={faCircleXmark} onClick={toggleBasket} className={style.basketCloseButton} role="button" />
          </div>
          <Divider width="full-width" />
        </>
      ) : null}
      <div className={style.basketItemContainer}>
        {basketItems.length > 0 ? (
          <ul>
            {basketItems.map((item, index) => (
              <li key={index} className={style.basketItem} onClick={() => toggleItem(item.id)}>
                <div className={style.basketItemQuantityBlock}>

                  {isDesktop || expandedItemId === item.id ? (
                    <FontAwesomeIcon 
                      icon={faCircleMinus} 
                      className={style.basketItemQuantityIcon} 
                      onClick={() => decreaseQuantity(item.id)} 
                      aria-label="decrease quantity" />
                  ) : null}

                  <span className={style.basketItemQuantity}>
                    {item.quantity}{!isDesktop && expandedItemId !== item.id ? ' x' : null}
                  </span>

                  {isDesktop || expandedItemId === item.id ? (
                    <FontAwesomeIcon 
                      icon={faCirclePlus} 
                      className={style.basketItemQuantityIcon} 
                      onClick={() => increaseQuantity(item.id)} 
                      aria-label="increase quantity" />
                  ) : null}

                </div>
                <span className={style.basketItemName}>{item.name}</span>
                <span className={style.basketItemPrice}>
                  £{(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
      {!isDesktop ? (
        <>
          <Divider weight="thin" width="full-width" className={style.basketTotalDivider} />
          <div className={style.basketTotalPrice}>
            <span>Total:</span>
            <span><strong>£{formattedPrice}</strong></span>
          </div>
          <BasketButton isOpen={isOpen} basketItems={basketItems} />
        </>
      ) : null}
    </div>
  );
};

type BasketButtonProps = {
  isOpen?: boolean;
  toggleBasket?: () => void;
  basketItems?: BasketItem[];
};

const BasketButton = ({ isOpen, toggleBasket, basketItems = [] }: BasketButtonProps) => {
  const isDesktop = useMediaQuery("(min-width: 64em)");


  const totalPrice = basketItems.reduce((total: number, item: BasketItem) => total + item.price * item.quantity, 0);
  const formattedPrice = totalPrice.toFixed(2);
  const totalItems = basketItems.reduce((count: number, item: BasketItem) => count + item.quantity, 0);

  return (
    <div className={style.basketButton} onClick={toggleBasket}>
      <div className={style.basketButtonText}>
        <span className={style.basketLabel}>
          {isDesktop || isOpen ? 'Checkout' : 'Basket:'}
        </span>
        <span>(£{formattedPrice})</span>
      </div>
      {!isDesktop && !isOpen && (
        <span className={style.basketButtonIcon}>
          {totalItems > 0 && <span className={style.basketItemCount}>{totalItems}</span>}
          <FontAwesomeIcon icon={faBasketShopping} />
        </span>
      )}
    </div>
  );
};

export const OrderLocation = ({className}: {className?: string}) => {
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
    <div className={classNames(style.locationSelector, className)}>
      <h3>{currentLocation}</h3>
      <span className={style.locationSelectButton} onClick={handleLocationSelectorClick} role="button" >
        <FontAwesomeIcon icon={locationSelectorIcon} className={style.locationSelectIcon} />
      </span>
      {locationSelector && <ul className={style.locationSelectorList}>{Locations.map(location => (
        <li key={location.id} onClick={() => handleSetCurrentLocation(location.name)}>{location.name}</li>
      ))}</ul>}
    </div>
    </>
  )
}

export const OrderMethod = ({className}: {className?: string}) => {
  const [orderMethod, setOrderMethod] = useState("delivery");
  const searchParams = useSearchParams()

  const handleOrderMethodChange = (method: string) => {
    setOrderMethod(method);
  };

  const methodFromQuery = searchParams.get("method")

  useEffect(() => {
    if(methodFromQuery && methodFromQuery !== orderMethod) {
      setOrderMethod(methodFromQuery)
    }
  },[searchParams, methodFromQuery, orderMethod])

  return (
    <div className={classNames(style.orderMethod, className)}>
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

const OrderMenuCategories = ({ currentCategory, onCategoryChange }: { currentCategory: string, onCategoryChange: (id: string) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 64em)");

  
  useEffect(() => {
    if (isDesktop) {
      setDropdownOpen(true)
    } else {
      setDropdownOpen(false)
    }
  }, [isDesktop]); 

  const handleDropdownClick = () => {
    setDropdownOpen((prev) => !prev);
  }

  const handleCatChange = () => {
    if(isDesktop) {
      return
    } else {
      setDropdownOpen(false)
    }
  }

  const icon = dropdownOpen ? faChevronUp : faChevronDown;

  return (
    <div className={style.orderCategory}>
      {!isDesktop && (<div className={style.currentCategory} onClick={() => handleDropdownClick()}>
        <span className={style.currentCategoryText}>{capitaliseFirstLetter(currentCategory)}</span>
        <FontAwesomeIcon icon={icon} />
      </div>)}
      {dropdownOpen && 
        <ul className={style.orderCategoryList}>
          {Categories.map((cat) => (
            <li key={cat.id} className={`${style.orderCategoryOption} ${currentCategory === cat.id ? style.activeClass : ''}`} onClick={() => {onCategoryChange(cat.id); handleCatChange()}}>
              {capitaliseFirstLetter(cat.id)}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export const OrderMenu = ({className, orderButtonAction}: {className?: string, orderButtonAction?: (item: any) => void}) => {
  const [currentCategory, setCurrentCategory] = useState<string>(Categories[0].id)

  const menuItems = MenuItems.filter(item => item.category === currentCategory);

  return (
    <div className={className}>
      <OrderMenuCategories currentCategory={currentCategory} onCategoryChange={setCurrentCategory} />
      <div className="order__menu-items">
        <MenuItemCard items={menuItems} basket={true} orderButtonAction={orderButtonAction} />
      </div>
    </div>

  )
}

export default OrderBar