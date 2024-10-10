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

type EventDate = {
  fullDate: string;
  day: number;
  month: number;
  monthText: string;
  year: number;
};

export type Event = {
  id: number;
  name: string;
  date: string | EventDate | any;
  time: string;
  location: string;
  description: string;
  image?: string | StaticImageData;
};
