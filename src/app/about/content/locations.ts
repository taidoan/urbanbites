import { Locations } from "@/content/locations";

const locations = Locations.map((location) => ({
  id: location.id,
  title: {
    title: location.name,
  },
  content: `${location.address}, ${location.city}, ${location.postcode}`,
  image: {
    src: location.image ?? undefined,
    alt: location.name,
  },
  cta: {
    title: "Directions",
    url: location.mapLink,
    target: "_blank",
  },
  url: `/locations/#${location.id}`,
}));

export default locations;
