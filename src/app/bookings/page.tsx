import type { Metadata } from "next";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: 'Urban Bites | Bookings',
}

const BookingsPage = () => {
  return(
   <main>
    <section className={`bookings__hero`}>
        <div className={`content-grid content-grid--inc-border`}>
          <h1 className={``}>Bookings</h1>
          <Divider variant='primary' hero/>
          <p className={``}>Reserving a table online at Urban Bites is quick and easy. Secure your spot in just a few clicks and let us take care of the rest!</p>
        </div>
    </section>
    <section className={`bookings__standard`}>
      <div className={`content-grid`}>
        <h2>Standard Booking</h2>
        <span>(Up To 9 Guests)</span>
        <Divider />
        <p>Reserve your table using the form below, or feel free to walk in. Either way, we’ve got you. We look forward to welcoming you!</p>
      </div>
    </section>
    <section className={`bookings__group`}>
      <div className={`content-grid content-grid--inc-border`}>
        <h2>Group Booking</h2>
        <span>(10 or more guests)</span>
        <Divider />
        <p>For group bookings of 10 or more guests, please reach out to us directly via phone or email. We’ll work with you to ensure your gathering is just right. We look forward to hosting your group!</p>
      </div>
    </section>
   </main>
  )
 }
  
 export default BookingsPage