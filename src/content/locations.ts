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
    mapLink:
      "https://www.google.com/maps/place/Digbeth,+Birmingham/@52.4739655,-1.8914279,2357m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4870bc862960b825:0x922a326b32168ca7!8m2!3d52.4754938!4d-1.8881111!16zL20vMDM3NHRt?entry=ttu",
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
    mapLink:
      "https://www.google.com/maps/place/City+Centre,+Birmingham/@52.4739655,-1.8914279,2357m/data=!3m1!1e3!4m6!3m5!1s0x4870bc8dea5a590b:0xf5a8185ddef9e97c!8m2!3d52.4820274!4d-1.8964356!16s%2Fm%2F03hkcc3?entry=ttu",
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
    mapLink:
      "https://www.google.com/maps/place/Harborne,+Birmingham/@52.4611559,-1.9737737,4716m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48709629c3afb603:0xe23f1922828a4147!8m2!3d52.4597094!4d-1.961668!16zL20vMDJ3NV82?entry=ttu",
  },
];
