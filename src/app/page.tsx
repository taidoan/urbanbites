
import Button from "@/components/Button";
import hero from "@pages/home/hero.module.scss"
import ft from "@pages/home/features.module.scss"
import ab from "@pages/home/about.module.scss"
import ExportedImage from "next-image-export-optimizer";
import foodImage from '@images/home/food.png';
import drinksImage from "@images/home/drinks.png";
import orderImage from "@images/home/order.png";
import Divider from "@/components/Divider";
import QuickLink from "@/components/QuickLinks";

export default function Home() {
  return (
    <main>
      <section className="home__hero">
        <div className={`content-grid ${hero.block}`}>
          <h1 className={hero.title}>Discover Your Urban Escape</h1>
          <span className={hero.tagline}>Fresh Food, Local Flavour, and Crafted Drinks</span>
          <div className={hero.ctaBlock}>
            <Button variant='secondary' title='Order Online' href="/order" />
            <Button variant='primary' title='Book A Table' href="/bookings" />
          </div>
        </div>
      </section>
      <section className="home__features">
        <div className={ft.container}>
          <div className="content-grid content-grid--half">
            <h2 className={ft.title}>Food</h2>
            <Divider />
            <p className={ft.paragraph}>From hearty breakfasts to savory dinners, our diverse menu is crafted with care an d locally sourced ingredients. Dive into deliciousness and explore the full range of our offerings!</p>
            <div className={ft.ctaBlock}>
            <Button variant='primary' title='Food Menu' href="/menus/food" />
          </div>
          </div>
          <ExportedImage src={foodImage} alt="Food Menu" className={ft.image} />
        </div>
        <div className={ft.container}>
          <div className="content-grid content-grid--half">
            <h2 className={ft.title}>Drinks</h2>
            <Divider />
            <p className={ft.paragraph}>From handcrafted coffees to refreshing smoothies and craft beers, our drink menu is designed to delight. Sip and savour the flavours of Urban Bites!</p>
            <div className={ft.ctaBlock}>
            <Button variant='primary' title='Drinks Menu' href="/menus/drinks" />
          </div>
          </div>
          <ExportedImage src={drinksImage} alt="Drinks Menu" className={ft.image} />
        </div>
        <div className={`${ft.container} ${ft.containerDark}`}>
          <div className="content-grid content-grid--half">
            <h2 className={`${ft.title} ${ft.titleDark}`}>Order</h2>
            <Divider variant="tertiary" />
            <p className={ft.paragraph}>Elevate your next event with Urban Bites. Whether at home or in the office, enjoy our delicious dishes and drinks with convenient delivery or pickup options.</p>
            <div className={ft.ctaBlock}>
            <Button variant='primary' title='Delivery' href="/order/delivery" />
            <Button variant='primary' title='Pick Up' href="/order/pick-up" />
          </div>
          </div>
          <ExportedImage src={orderImage} alt="Order" className={ft.image} />
        </div>
      </section>
      <section className={`home__quick-links`}>
        <div>
          <QuickLink title="Locations" tagline="Visit" variant="locations" href="/locations" />
          <QuickLink title="Events" tagline="Experience" variant="events" href="/events" />
          <QuickLink title="Bookings" tagline="Reserve" variant="bookings" href="/bookings" />
        </div>
      </section>
      <section className={`home__about`}>
        <div className={`content-grid ${ab.container}`}>
        <h1 className={ab.title}>
          The Love Behind Urban&nbsp;Bites
        </h1>
        <Divider />
          <p className={ab.paragraph}>Urban Bites began with a simple idea: to create a community-focused café where everyone feels at home. Our commitment to using fresh, locally sourced ingredients and providing a cozy, welcoming atmosphere has made us a favorite spot in the neighborhood. </p>
          <div className={ab.ctaBlock}>
          <Button variant='secondary' title='Our Story' href='/about' />
        </div>
        </div>
      </section>
    </main>
  );
}
