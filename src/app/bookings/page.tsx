import type { Metadata } from "next";
import Divider from "@/components/Divider";
import BookingsBar from "@/components/Bookings";
import ContactButton from "./components/ContactButtons";

export const metadata: Metadata = {
  title: 'Urban Bites | Bookings',
}

const BookingsPage = () => {
  return(
   <main>
    <section className={`bookings__hero`}>
        <div className={`content-grid content-grid--inc-border`}>
          <h1>Bookings</h1>
          <Divider variant='primary' hero/>
          <p>Reserving a table online at Urban Bites is quick and easy. Secure your spot in just a few clicks and let us take care of the rest!</p>
        </div>
    </section>
    <section className={`bookings__standard`}>
      <div className={`content-grid`}>
        <div className={`section-intro`}>
          <h2>Standard Booking</h2>
          <span className={`paranthetical`}>(Up To 9 Guests)</span>
          <Divider center />
          <p>Reserve your table using the form below, or feel free to walk in. Either way, we’ve got you. We look forward to welcoming you!</p>
        </div>
        <BookingsBar className={`bookings-bar`} />
      </div>
    </section>
    <section className={`bookings__group`}>
      <div className={`content-grid content-grid--inc-border`}>
        <div className={`section-intro`}>
          <h2>Group Booking</h2>
          <span className={`paranthetical`}>(10 or more guests)</span>
          <Divider center />
          <p>For group bookings of 10 or more guests, please reach out to us directly via phone or email. We’ll work with you to ensure your gathering is just right. We look forward to hosting your group!</p>
        </div>
        <div>
          <ContactButton method="email" href="mailto:contact@urbanbites.com" content="contact@urbanbites.com" />
          <ContactButton method="phone" content="0121 234 4567" href="tel:01212454567" />
        </div>
      </div>
    </section>
   </main>
  )
 }
  
 export default BookingsPage