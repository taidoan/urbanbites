import {
  qualityCardImage,
  sustainableCardImage,
  communityCardImage,
  innovativeCardImage,
} from "./images";
const values = [
  {
    title: { title: "Quality" },
    image: { src: qualityCardImage, alt: "Quality Products" },
    content:
      "We use only the finest, locally-sourced ingredients to ensure every bite is a delightful experience.",
  },
  {
    title: { title: "Community" },
    image: { src: communityCardImage, alt: "Community" },
    content:
      "We foster a warm, welcoming environment where everyone feels like family.",
  },
  {
    title: { title: "Sustainable" },
    image: { src: sustainableCardImage, alt: "Sustainable practices" },
    content:
      "We are dedicated to eco-friendly practices, from sourcing to packaging, to help protect our planet.",
  },
  {
    title: { title: "Innovative" },
    image: { src: innovativeCardImage, alt: "Innovative" },
    content:
      "We constantly evolve our menu and services to offer fresh, exciting experiences for our customers.",
  },
];

export default values;
