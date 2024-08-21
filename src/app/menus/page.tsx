import type { Metadata } from "next";
import {h, c} from './styles'
import Carousel from "@/components/Carousel";
import { firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage } from "./images";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: 'Urban Bites | Menu',
}

const MenusPage = () => {
  return(
    <main>
      <section className={`${h.hero} menus__hero`}>
        <Carousel target={"menus__hero"} slides={[firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage]} duration={7500}>
          <div className="content-grid content-grid--inc-border">
            <h1 className={h.title}>Menus</h1>
            <Divider variant='primary' hero/>
            <p className={h.intro}>
              Explore our diverse offerings, from breakfast delights to savoury lunches and dinners, plus an array of handcrafted drinks.
            </p>
          </div>
        </Carousel>
      </section>
      <section className="menus__filter">
        <div className='content-grid'>
          Menu Filter here
        </div>
      </section>
      <section className="menus__content">
        <div className="content-grid content-grid--inc-border">
          Menu items here
        </div>
      </section>
    </main>
  )
 }
 
 export default MenusPage