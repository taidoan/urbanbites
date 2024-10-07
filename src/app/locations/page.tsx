import Divider from "@/components/Divider"
import type { Metadata } from "next";
import { Locations } from "@/content/locations";
import LocationCard from "./components/LocationCard";

export const metadata: Metadata = {
  title: 'Urban Bites | Locations'
}

const LocationsPage = () => {
  return(
   <main>
     <section className={`locations__hero`}>
        <div className={`content-grid content-grid--inc-border`}>
          <h1>Locations</h1>
          <Divider variant='primary' hero={true} />
          <p>Looking for your nearest Urban Bites? Find our locations below and drop in for a fresh meal and crafted drinks!</p>
        </div>
     </section>
     <section className={`locations__body`}>
      <div className={`content-grid content-grid--inc-border`}>
        <div className={`section-intro`}>
          <h2>Where We Are</h2>
          <Divider center={true} />
          <p>Each Urban Bites offers a unique yet welcoming atmosphere—find your nearest café to enjoy our delicious offerings and exceptional service.</p>
        </div>
        <div className={`locations__content`}>
          {Locations.map(location => (
              <LocationCard location={location} key={location.id} className="locations-entry" />
          ))}
        </div>
      </div>
     </section>
   </main>
  )
 }
 
 export default LocationsPage