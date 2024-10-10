import OrderBar from "@/components/Order";
import Divider from "@/components/Divider";
import type { Metadata } from "next";

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
      <OrderBar />
    </div>
  )
}

export default OrderPage