'use client'
import OrderBar, { OrderLocation, OrderMenu, OrderMethod } from "@/components/Order";
import { useState } from "react";

const OrderComponent = () => {
  const [basketItems, setBasketItems] = useState<any[]>([]);

  const handleAddToBasket = (item: any) => {
    setBasketItems(prevItems => [...prevItems, item]);
    console.log('added to basket')
  };

  console.log('Basket Items:', basketItems);

  return(
    <>
      <div className="order__bar" >
        <OrderLocation className="order__location" />
        <OrderMethod className="order__method" />
        <OrderBar basketItems={basketItems} />
      </div>
      <OrderMenu className="order__menu" orderButtonAction={handleAddToBasket} />
    </>
  )
}

export default OrderComponent