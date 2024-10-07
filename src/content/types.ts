import { StaticImageData } from "next/image";
export type Location = {
  id: number;
  name: string;
  description?: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  breakfastEnd: string;
  lastBooking: string;
  weekdayHours: string;
  weekendHours: string;
  image?: string | StaticImageData;
  mapLink?: string;
};
