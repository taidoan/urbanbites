/**
 * Capitalizes the first letter of a given string.
 *
 * @param string - The string whose first letter is to be capitalized.
 * @returns A new string with the first letter capitalized.
 *
 * @example
 * ```ts
 * capitaliseFirstLetter("hello"); // returns "Hello"
 * capitaliseFirstLetter("world"); // returns "World"
 * ```
 */
export const capitaliseFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
