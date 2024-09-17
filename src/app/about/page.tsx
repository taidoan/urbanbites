import ExportedImage from 'next-image-export-optimizer'
import { j, v, e, r, l } from "./styles"
import { Divider, Button, SwiperSection, MenuItem } from "./components"
import type { Metadata } from "next";
import { events, locations, reviews, values } from './content'

import {
  journeyImage,
  sustainableImage,
  communityImage,
  risotto,
  crispycalamari,
  orchardbliss
} from './images'
import ReviewPill from '@/components/Reviews/Pill';


export const metadata: Metadata = {
  title: 'Urban Bites | About',
}

const AboutPage = () => {
 return(
  <main>
    <section className='about__intro-container'>
      <section className='about__hero'>
        <div className={`content-grid content-grid--inc-border`}>
          <h1 className={`site-header__trigger`}>About Us</h1>
          <Divider variant='primary' hero/>
          <p>Welcome to Urban Bites Cafe! Discover our story and explore the heart of our community-focused cafe.</p>
        </div>
      </section>
      <section className='about__mission-statement'>
        <div className={`content-grid content-grid--inc-border ${j.missionBlock}`}>
          <div className={j.missionCard}>
          <p>At <strong>Urban Bites</strong>, our mission is to create a welcoming <strong>community</strong> space that celebrates <strong>fresh</strong>, <strong>locally-sourced</strong> ingredients, <strong>sustainable</strong> practices, and the joy of <strong>togetherness</strong>.</p>
          </div>
        </div>
      </section>
      <section className='about__journey'>
        <div>
          <div className='content-grid content-grid--half'>
            <h2 className={j.title}>Our Journey</h2>
            <Divider />
            <p>Urban Bites Cafe began as a small neighborhood coffee shop with a big dream: to create a welcoming space where the community could come together over delicious, fresh food and exceptional coffee. </p>

            <p>From our humble beginnings, we&apos;ve grown into a beloved local gathering spot, always staying true to our roots of quality, sustainability, and community spirit. Every step of our journey has been guided by our passion for creating memorable experiences and fostering connections. </p>
          </div>
          <ExportedImage src={journeyImage} alt="Our Journey" className={j.image} />
        </div>
      </section>
    </section>
    <section className='about__values'>  
      <div className='content-grid content-grid--inc-border'>
        <h2 className={v.title}>Our Values</h2>
        <Divider />
        <p>At Urban Bites Cafe, we are driven by a commitment to excellence, community, and sustainability.</p>

        <div className={v.swiperBlock}>
          <SwiperSection name="values" slides={values} insideImage={true} centered={true} />
        </div>
      </div>
    </section>
    <section className='about__values-expanded'>
      <div className='about__values-grid'>
        <div className='content-grid content-grid--half'>
          <h2 className={v.titleMd}>Sustainable</h2>
          <Divider />
          <p>We are dedicated to eco-friendly practices, from sourcing to packaging, to help protect our planet. Our cafe partners with local farmers who use sustainable farming methods, ensuring that our ingredients are fresh and responsibly sourced. </p>

          <p>We minimize waste by using compostable or recyclable packaging and strive to reduce our carbon footprint through energy-efficient operations.</p>
        </div>
        <ExportedImage src={sustainableImage} alt="Sustainability" className={j.image} />
      </div>
      <div  className='about__values-grid'>
        <div className='content-grid content-grid--half'>
          <h2 className={v.titleMd}>Community</h2>
          <Divider />
          <p>At Urban Bites Cafe, we value community and actively contribute to its well-being. Our cafe hosts local events like live music, art showcases, and community meetings, creating a space for people to connect and engage. </p>

          <p>We collaborate with nearby schools and organizations to support educational programs and volunteer initiatives. By sourcing ingredients from local farmers and artisans, we ensure fresh, high-quality products while also bolstering our local economy.</p>
        </div>
        <ExportedImage src={communityImage} alt="Community" className={j.image} />
      </div>
    </section>
    <section className='about__menu-items'>
      <div>
      <MenuItem title="Mushroom Risotto" href="/menus/food#risotto" image={risotto} category="food" />
      <MenuItem title="Orchard Bliss" href="/menus/drinks#orchardbliss" image={orchardbliss} category="drinks" />
      <MenuItem title="Crispy Calamari" href="/menus/food#calamari" image={crispycalamari} category="food" />
      </div>
    </section>
    <section className='about__locations'>
      <div className='content-grid content-grid--inc-border'>
        <h2 className={l.title}>Where We Are</h2>
        <Divider />
        <p>Each Urban Bites offers a unique atmosphere while maintaining the warm and welcoming vibe we&apos;re known for. Find the nearest cafe to enjoy our delicious offerings and exceptional service.</p>

        <div className={l.swiperBlock}>
          <SwiperSection name='locations' slides={locations} insideImage={false} centered={true} imageSize='large' />
        </div>
      </div>
    </section>
    <section className='about__events'>
      <div className='content-grid'>
        <div>
        <h2 className={e.title}>Events</h2>
        <Divider />
        <p>From live music and art exhibitions to local meetups and workshops, there&apos;s always something happening at Urban Bites Cafe. Join us and be part of the excitement!</p>
        <div className={e.ctaBlock}>
          <Button variant='beige' title="What's On" href='/events' />
        </div>
        </div>
        <div className={e.swiperBlock}>
          <SwiperSection name="events" slides={events} event={true} insideImage={false}/>
        </div>
      </div>
    </section>
    <section className='about__reviews'>
      <div className='content-grid content-grid--inc-border'>
        <div>
          <div className={r.header}>
            <div>
              <h2 className={r.title}>Reviews</h2>
              <Divider />
              <p>Explore the rave reviews from our satisfied customers about their experiences at Urban Bites.</p>
            </div>
            <div>
              <ReviewPill rating={4.2} reviews={100} />
            </div>
          </div>
        </div>
        <div className={r.swiperBlock}>
          <SwiperSection name="reviews" slides={reviews} review={true}/>
        </div>
      </div>
    </section>
  </main>
 )
}

export default AboutPage