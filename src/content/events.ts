import { Event } from "./types";
import { generateId } from "@/utilities/generateId";
import { artAndWineNight, jazzNight, triviaNight } from "./images";
import { splitDate } from "@/utilities/date";

export const Events: Event[] = [
  {
    id: generateId(),
    name: "Art & Wine Night",
    date: splitDate("21/04/2024"),
    time: "6pm",
    location: "Harborne",
    description:
      "Join us for an enchanting evening of art and wine at Urban Bites. Local artists will showcase their latest works, offering an opportunity to meet the creators, learn about their inspiration, and even purchase original pieces. Sip on fine wine as you explore the exhibits and enjoy a night of creativity, culture, and conversation.",
    image: artAndWineNight,
  },
  {
    id: generateId(),
    name: "Live Jazz Night",
    date: splitDate("28/04/2024"),
    time: "8pm",
    location: "Digbeth",
    description:
      "Immerse yourself in the smooth sounds of live jazz at Urban Bites. Enjoy an evening of soulful melodies performed by talented local musicians while savoring our delicious food and drinks. It's the perfect way to unwind and experience the vibrant energy of live music.",
    image: jazzNight,
  },
  {
    id: generateId(),
    name: "Trivia Night",
    date: splitDate("03/05/2024"),
    time: "7:30pm",
    location: "City Centre",
    description:
      "Trivia Night at Urban Bites! Gather your friends for a fun-filled evening of brain-teasing questions, great food, and drinks. Test your knowledge and compete for exciting prizes in a relaxed and lively atmosphere.",
    image: triviaNight,
  },
];
