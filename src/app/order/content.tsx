'use client';
import OrderBar, { OrderLocation, OrderMenu, OrderMethod } from "@/components/Order";
import { useState } from "react";

type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const OrderComponent = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const handleAddToBasket = (item: Omit<BasketItem, 'quantity'>) => {
    setBasketItems(prevItems => {
      const existingItem = prevItems.find(basketItem => basketItem.id === item.id);
      if (existingItem) {
        return prevItems.map(basketItem =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (itemId: number) => {
    setBasketItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setBasketItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevItems.filter(item => item.id !== itemId);
    });
  };
  return (
    <>
      <div className="order__bar">
        <OrderLocation className="order__location" />
        <OrderMethod className="order__method" />
        <OrderBar basketItems={basketItems} 
                  increaseQuantity={increaseQuantity} 
                  decreaseQuantity={decreaseQuantity} />
      </div>
      <OrderMenu className="order__menu" orderButtonAction={handleAddToBasket} />
    </>
  );
};

export default OrderComponent;
