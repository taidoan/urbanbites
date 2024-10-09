import Divider from "@/components/Divider";
import type { Metadata } from "next";
import { Events } from "@/content/events";
import EventCard from "./components/EventCard";

export const metadata: Metadata = {
  title: 'Urban Bites | Events'
}

const EventsPage = () => {
  return(
    <main>
      <section className={`events__hero`}>
        <div className={`content-grid content-grid--inc-border`}>
          <h1>Events</h1>
          <Divider variant='primary' hero={true} />
          <p>Join us for themed nights and special events at Urban Bites! From live music to seasonal menus, there's always something exciting happening.</p>
        </div>
      </section>
      <section className={`events__body`}>
        <div className={`content-grid content-grid--inc-border`}>
          <div className={`section-intro`}>
            <h2>Upcoming Events</h2>
            <Divider center={true} />
            <p>Here are our exciting themed nights and special events at Urban Bites, don’t miss out on the fun!</p>
          </div>
          <div className={`events__content`}>
            {Events.map(event => (
                <EventCard entry={event} key={event.id} className={`events-entry`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
 
 export default EventsPage