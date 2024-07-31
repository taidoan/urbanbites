import Divider from '@/components/Divider'
import type { Metadata } from 'next'
import h from "@pages/about/hero.module.scss"
 
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
      <div className='content-grid content-grid--inc-border'>
        <p>mission statement here</p>
      </div>
      <div>
        <div className='content-grid content-grid--half'>
          <p>Journey content here</p>
        </div>
        <div>Journey image here</div>
      </div>

    </section>
    <section className='about__values'>  
      <div className='content-grid content-grid--inc-border'>
        <p>VBalues here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt optio, culpa ratione cumque vitae animi dicta? Nesciunt consequatur, quaerat necessitatibus deleniti optio ipsam dolorem similique ex delectus perferendis, eveniet sapiente odit cumque nemo sit expedita eaque exercitationem aliquam eius nisi, eligendi eum? Mollitia harum debitis labore cumque quae magnam recusandae assumenda! Hic magnam cupiditate rerum exercitationem provident nobis veniam, asperiores aut officiis beatae placeat odio eum tenetur nesciunt, consectetur sapiente ratione!</p>
      </div>
    </section>
    <section className='about__values-expanded'>
      <div>
        <div className='content-grid content-grid--half'>
          <h2>Sustainbiklity</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>Image here</div>
      </div>
      <div>
        <div className='content-grid content-grid--half'>
          <h2>Community</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>Image here</div>
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