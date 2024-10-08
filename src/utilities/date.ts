/**
 * Splits a date string into an object containing day, month, and year.
 *
 * @param dateString - The date string to be split. It should be in the format "DD/MM/YYYY" or "DD.MM.YYYY".
 * @returns An object containing the day, month, and year. The month is either a number or a string,
 *          depending on the format parameter.
 */
export const splitDate = (dateString: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateParts = dateString.includes("/")
    ? dateString.split("/")
    : dateString.split(".");

  const day = parseInt(dateParts[0], 10);
  const monthNumber = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);
  const monthText = months[monthNumber - 1];

  return {
    day,
    month: monthNumber,
    monthText: monthText,
    year,
  };
};

/**
 * Returns the appropriate ordinal suffix for a given day of the month.
 *
 * @param day - The day of the month (1-31).
 * @returns The ordinal suffix for the given day ("st", "nd", "rd", or "th").
 *
 * @example
 * ```ts
 * getDaySuffix(1); // returns "st"
 * getDaySuffix(2); // returns "nd"
 * getDaySuffix(3); // returns "rd"
 * getDaySuffix(4); // returns "th"
 * getDaySuffix(11); // returns "th"
 * getDaySuffix(21); // returns "st"
 * ```
 */
export const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

/**
 * Returns the three-letter abbreviation for a given month name.
 *
 * @param month - The full name of the month (e.g., "January", "February").
 * @returns The three-letter abbreviation of the month (e.g., "Jan", "Feb").
 *          If the input month name is not recognized, it returns the input as is.
 *
 * @example
 * ```ts
 * getMonthAbbreviation("January"); // Returns "Jan"
 * getMonthAbbreviation("February"); // Returns "Feb"
 * getMonthAbbreviation("Unknown"); // Returns "Unknown"
 * ```
 */
export const getMonthAbbreviation = (month: string): string => {
  const monthMap: { [key: string]: string } = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };
  const normalizedMonth =
    month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  return monthMap[normalizedMonth] || month;
};
