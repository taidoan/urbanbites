import { Events } from "@/content/events";
import { truncate } from "@/utilities/text";

const events = Events.map((event) => ({
  title: {
    title: event.name,
    size: "small" as "small",
  },
  content: truncate(event.description, 18),
  image: {
    src: event.image,
    alt: event.name,
  },
  time: event.time,
  location: event.location,
  url: `/events?eventId=${event.id}`,
  date: { day: 21, month: "April" },
}));

export default events;
