/**
 * Parses a time string in the format "hh:mmam" or "hh:mmpm" and returns a Date object.
 * @param timeStr - The time string to parse.
 * @returns A Date object representing the parsed time.
 */
export const parseTime = (timeStr: string): Date => {
  const timeMatch = timeStr.match(/(\d{1,2})(?::(\d{2}))?\s?(am|pm)?/i);

  if (!timeMatch) {
    console.error(`Invalid time format: ${timeStr}`);
    return new Date(NaN);
  }

  let [, hourStr, minuteStr = "00", period = "am"] = timeMatch;
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  if (period.toLowerCase() === "pm" && hour !== 12) {
    hour += 12;
  } else if (period.toLowerCase() === "am" && hour === 12) {
    hour = 0;
  }

  const date = new Date(1970, 0, 1, hour, minute);
  return date;
};

/**
 * Formats a Date object into a time string in the format "hh:mmam" or "hh:mmpm".
 * @param date - The Date object to format.
 * @returns A string representing the formatted time.
 */
export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
};

/**
 * Generates an array of time strings at specified intervals between a start and end time.
 * @param startTimeStr - The start time string in the format "hh:mmam" or "hh:mmpm".
 * @param endTimeStr - The end time string in the format "hh:mmam" or "hh:mmpm".
 * @param intervalMinutes - The interval in minutes between each generated time.
 * @returns An array of time strings at the specified intervals.
 */
export const generateTimes = (
  startTimeStr: string,
  endTimeStr: string,
  intervalMinutes: number
): string[] => {
  const startTime = parseTime(startTimeStr);
  const endTime = parseTime(endTimeStr);

  if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
    console.error("Invalid start or end time");
    return [];
  }

  const times: string[] = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    const formattedTime = formatTime(currentTime);
    times.push(formattedTime);
    currentTime = new Date(currentTime.getTime() + intervalMinutes * 60000);
  }

  return times;
};
