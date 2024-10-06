import { Location } from "./types";
import { default as digbethImage } from "@images/locations/digbeth.jpg";
import { default as cityImage } from "@images/locations/city.jpg";
import { default as harborneImage } from "@images/locations/harbourne.jpg";

export const Locations: Location[] = [
  {
    id: 1,
    name: "Digbeth",
    address: "115 Crag Lane",
    city: "Birmingham",
    postcode: "B23 1EU",
    phone: "0121 234 6677",
    email: "digeth@urbanbites.com",
    breakfastEnd: "12pm",
    lastBooking: "9:00pm",
    weekdayHours: "8am-10pm",
    weekendHours: "9am-10pm",
    description:
      "Located in the heart of Digbeth, Urban Bites offers a vibrant space to enjoy fresh, locally sourced meals and crafted drinks.",
    image: digbethImage,
  },
  {
    id: 2,
    name: "City Centre",
    address: "88 Cannon Street",
    city: "Birmingham",
    postcode: "B33 1JR",
    phone: "0123 567 8910",
    email: "citycentre@urbanbites.com",
    breakfastEnd: "12pm",
    lastBooking: "10:00pm",
    weekdayHours: "8am-11pm",
    weekendHours: "9am-11pm",
    description:
      "Right in the bustling City Centre, Urban Bites is your go-to spot for fresh, flavorful dishes and hand-crafted drinks.",
    image: cityImage,
  },
  {
    id: 3,
    name: "Harborne",
    address: "165 London Road",
    city: "Birmingham",
    postcode: "B2 4LH",
    phone: "0123 456 7891",
    email: "harborne@urbanbites.com",
    breakfastEnd: "12pm",
    lastBooking: "8:00pm",
    weekdayHours: "8am-9pm",
    weekendHours: "9am-9pm",
    description:
      "Tucked in the charming streets of Harborne, Urban Bites serves up local flavors with a warm and welcoming atmosphere.",
    image: harborneImage,
  },
];
