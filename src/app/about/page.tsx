import Divider from '@/components/Divider'
import type { Metadata } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import h from "@pages/about/hero.module.scss"
import j from "@pages/about/journey.module.scss"
import journeyImage from "@images/about/journey4k.jpeg"
import sustainableImage from "@images/about/sustainable4k.jpeg"
import communityImage from "@images/about/community4k.jpeg"
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Urban Bites',
}

const AboutPage = () => {
 return(
  <main>
    <section className='about__intro-container'>
      <section className='about__hero'>
        <div className={`content-grid content-grid--inc-border`}>
          <h1 className={h.title}>About Us</h1>
          <Divider variant='primary' hero/>
          <p className={h.intro}>Welcome to Urban Bites Cafe! Discover our story and explore the heart of our community-focused cafe.</p>
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

            <p>From our humble beginnings, we've grown into a beloved local gathering spot, always staying true to our roots of quality, sustainability, and community spirit. Every step of our journey has been guided by our passion for creating memorable experiences and fostering connections. </p>
          </div>
          <ExportedImage src={journeyImage} alt="Our Journey" className={j.image} />
        </div>
      </section>
    </section>
    <section className='about__values'>  
      <div className='content-grid content-grid--inc-border'>
        <h2>Our Values</h2>
        <Divider />
        <p>At Urban Bites Cafe, we are driven by a commitment to excellence, community, and sustainability.</p>

        <div>Values block here</div>
      </div>
    </section>
    <section className='about__values-expanded'>
      <div className='about__values-grid'>
        <div className='content-grid content-grid--half'>
          <h2>Sustainable</h2>
          <Divider />
          <p>We are dedicated to eco-friendly practices, from sourcing to packaging, to help protect our planet. Our cafe partners with local farmers who use sustainable farming methods, ensuring that our ingredients are fresh and responsibly sourced. </p>

          <p>We minimize waste by using compostable or recyclable packaging and strive to reduce our carbon footprint through energy-efficient operations.</p>
        </div>
        <ExportedImage src={sustainableImage} alt="Sustainability" className={j.image} />
      </div>
      <div  className='about__values-grid'>
        <div className='content-grid content-grid--half'>
          <h2>Community</h2>
          <Divider />
          <p>At Urban Bites Cafe, we value community and actively contribute to its well-being. Our cafe hosts local events like live music, art showcases, and community meetings, creating a space for people to connect and engage. </p>

          <p>We collaborate with nearby schools and organizations to support educational programs and volunteer initiatives. By sourcing ingredients from local farmers and artisans, we ensure fresh, high-quality products while also bolstering our local economy.</p>
        </div>
        <ExportedImage src={communityImage} alt="Community" className={j.image} />
      </div>
    </section>
    <section className='about__menu-items'>
      <p>menu items here</p>
    </section>
    <section className='about__locations'>
      <div className='content-grid content-grid--inc-border'>
        <h2>Where We Are</h2>
        <Divider />
        <p>Each Urban Bites offers a unique atmosphere while maintaining the warm and welcoming vibe we're known for. Find the nearest cafe to enjoy our delicious offerings and exceptional service.</p>

        <div>
          Locations block here
        </div>
      </div>
    </section>
    <section className='about__events'>
      <div className='content-grid'>
        <h2>Events</h2>
        <Divider />
        <p>From live music and art exhibitions to local meetups and workshops, there's always something happening at Urban Bites Cafe. Join us and be part of the excitement!</p>
        <div>
          <Button variant='primary' title="What's On" href='/events' />
        </div>
      </div>
    </section>
    <section className='about__reviews'>
      <div className='content-grid content-grid--inc-border'>
        <div>
          <h2>Reviews</h2>
          <Divider />
          <p>Explore the rave reviews from our satisfied customers about their experiences at Urban Bites.</p>
        </div>
        <div>
          Reveiw block here
        </div>
      </div>
    </section>
  </main>
 )
}

export default AboutPage