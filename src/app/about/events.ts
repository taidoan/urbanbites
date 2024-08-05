import { artsImage, jazzImage } from "./images";

const events = [
  {
    title: { title: "Art & Wine Evening", size: "small" as "small" },
    image: { src: artsImage, alt: "Art & Wine Evening" },
    date: { day: 21, month: "April" },
    content:
      "An enchanting evening of art and wine. Local artists will showcase their work. You&apos;ll have the opportunity to meet the creators...",
  },
  {
    title: { title: "Live Jazz Night", size: "small" as "small" },
    image: { src: jazzImage, alt: "Live Jazz Night" },
    date: { day: 28, month: "April" },
    content:
      "An evening of smooth jazz performed by local musicians. Enjoy our special menu and signature drinks while you unwind to live music.",
  },
];

export default events;
