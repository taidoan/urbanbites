import { digbethImage, cityImage, harbourneImage } from "./../images";

const locations = [
  {
    title: { title: "Digbeth" },
    image: { src: digbethImage, alt: "Digbeth" },
    content: "115 Crag Ln, Birmingham, BG3 1UE",
    cta: {
      title: "Directions",
      href: "https://www.google.com/maps/place/Digbeth,+Birmingham/@52.4739655,-1.8914279,2357m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4870bc862960b825:0x922a326b32168ca7!8m2!3d52.4754938!4d-1.8881111!16zL20vMDM3NHRt?entry=ttu",
      target: "_blank",
    },
    url: "/locations/#digbeth",
  },
  {
    title: { title: "City Centre" },
    image: { src: cityImage, alt: "City Centre" },
    content: "86 Cannon St, Birmingham, B33 1JR",
    cta: {
      title: "Directions",
      href: "https://www.google.com/maps/place/City+Centre,+Birmingham/@52.4739655,-1.8914279,2357m/data=!3m1!1e3!4m6!3m5!1s0x4870bc8dea5a590b:0xf5a8185ddef9e97c!8m2!3d52.4820274!4d-1.8964356!16s%2Fm%2F03hkcc3?entry=ttu",
      target: "_blank",
    },
    url: "/locations/#citycentre",
  },
  {
    title: { title: "Harborne" },
    image: { src: harbourneImage, alt: "Harborne" },
    cta: {
      title: "Directions",
      href: "https://www.google.com/maps/place/Harborne,+Birmingham/@52.4611559,-1.9737737,4716m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48709629c3afb603:0xe23f1922828a4147!8m2!3d52.4597094!4d-1.961668!16zL20vMDJ3NV82?entry=ttu",
      target: "_blank",
    },
    content: "165 London Rd, Birmingham, B2 4LH",
    url: "/locations/#harborne",
  },
];

export default locations;
