import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Urban Bites',
}

const AboutPage = () => {
 return(
  <main>
    <section className='about__hero'>
      <div className={`content-grid`}>
        Hero here
      </div>
    </section>
    <section className='about__journey'>
      <div className='content-grid'>
        mission statement here
      </div>
      <div>
        <div className='content-grid content-grid--half'>
          Journey content here
        </div>
        <div>Journey image here</div>
      </div>

    </section>
    <section className='about__values'>  
      <div className='content-grid'>
        Values here
      </div>
    </section>
    <section className='about__values-expanded'>
      <div>
        <div className='content-grid content-grid--half'>
          Sustainbiklity
        </div>
        <div>Image here</div>
      </div>
      <div>
        <div className='content-grid content-grid--half'>
          Community
        </div>
        <div>Image here</div>
      </div>
    </section>
    <section className='about__menu-items'>
      menu items here
    </section>
    <section className='about__locations'>
      <div className='content-grid'>
        Locations contenrt
      </div>
    </section>
    <section className='about__events'>
      <div className='content-grid'>
        events contenrt
      </div>
    </section>
    <section className='about__reviews'>
      <div className='content-grid'>
        reviews contenrt
      </div>
    </section>
  </main>
 )
}

export default AboutPage