import OrderBar, { OrderBasket, OrderLocation, OrderMenu, OrderMethod } from "@/components/Order";
import Divider from "@/components/Divider";
import type { Metadata } from "next";
import Filter from "@/components/Filter";
import { Categories } from "@/content/menu";
import OrderComponent from "./content";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Urban Bites | Order'
}

const OrderPage = () => {
  
  return(
    <div>
      <section className="order__hero">
          <div className={`content-grid content-grid--inc-border`}>
          <h1>Order</h1>
          <Divider variant='primary' hero={true} />
          <p>Indulge in our culinary delights, crafted just for you. Order now to experience the taste of perfection delivered to your doorstep!</p>
        </div>
      </section>
      
      <section className="order__body">
        <div className={`content-grid content-grid--inc-border`}>
          
          <Suspense fallback={<div>Loading...</div>}>
            <OrderComponent />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export default OrderPage