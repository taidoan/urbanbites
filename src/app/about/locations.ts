import { digbethImage, cityImage, harbourneImage } from "./images";

const locations = [
  {
    title: { title: "Digbeth" },
    image: { src: digbethImage, alt: "Digbeth" },
    content: "115 Crag Ln, Birmingham, BG3 1UE",
    cta: { title: "Directions", href: "/directions" },
  },
  {
    title: { title: "City Centre" },
    image: { src: cityImage, alt: "City Centre" },
    content: "86 Cannon St, Birmingham, B33 1JR",
    cta: { title: "Directions", href: "/directions" },
  },
  {
    title: { title: "Harbourne" },
    image: { src: harbourneImage, alt: "Harbourne" },
    cta: { title: "Directions", href: "/directions" },
    content: "165 London Rd, Birmingham, B2 4LH",
  },
];

export default locations;
