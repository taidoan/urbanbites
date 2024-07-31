import Divider from '@/components/Divider'
import type { Metadata } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import h from "@pages/about/hero.module.scss"
import j from "@pages/about/journey.module.scss"
import journeyImage from "@images/about/journey.jpg"
import sustainableImage from "@images/about/sustainable.jpg"
import communityImage from "@images/about/community.jpg"

export const metadata: Metadata = {
  title: 'About Urban Bites',
}

const AboutPage = () => {
 return(
  <main>
    <section className='about__hero'>
      <div className={`content-grid content-grid--inc-border`}>
        <h1 className={h.title}>About Us</h1>
        <Divider variant='primary' hero/>
        <p className={h.intro}>Welcome to Urban Bites Cafe! Discover our story and explore the heart of our community-focused cafe.</p>
      </div>
    </section>
    <section className='about__journey'>
      <div className={`content-grid content-grid--inc-border ${j.missionBlock}`}>
        <div className={j.missionCard}>
        <p>At <strong>Urban Bites</strong>, our mission is to create a welcoming <strong>community</strong> space that celebrates <strong>fresh</strong>, <strong>locally-sourced</strong> ingredients, <strong>sustainable</strong> practices, and the joy of <strong>togetherness</strong>.</p>
        </div>
      </div>
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
    <section className='about__values'>  
      <div className='content-grid content-grid--inc-border'>
        <h2>Our Values</h2>
        <Divider />
        <p>At Urban Bites Cafe, we are driven by a commitment to excellence, community, and sustainability.</p>
      </div>
    </section>
    <section className='about__values-expanded'>
      <div>
        <div className='content-grid content-grid--half'>
          <h2>Sustainable</h2>
          <Divider />
          <p>We are dedicated to eco-friendly practices, from sourcing to packaging, to help protect our planet. Our cafe partners with local farmers who use sustainable farming methods, ensuring that our ingredients are fresh and responsibly sourced. </p>

          <p>We minimize waste by using compostable or recyclable packaging and strive to reduce our carbon footprint through energy-efficient operations.</p>
        </div>
        <ExportedImage src={sustainableImage} alt="Sustainability" className={j.image} />
      </div>
      <div>
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
        <p>Locations contenrt</p>
      </div>
    </section>
    <section className='about__events'>
      <div className='content-grid'>
        <p>events contenrt</p>
      </div>
    </section>
    <section className='about__reviews'>
      <div className='content-grid content-grid--inc-border'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt optio, culpa ratione cumque vitae animi dicta? Nesciunt consequatur, quaerat necessitatibus deleniti optio ipsam dolorem similique ex delectus perferendis, eveniet sapiente odit cumque nemo sit expedita eaque exercitationem aliquam eius nisi</p>
      </div>
    </section>
  </main>
 )
}

export default AboutPage