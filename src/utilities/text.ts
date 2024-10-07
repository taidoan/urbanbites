/**
 * Truncates a given text to a specified number of words.
 *
 * This function splits the input text into words and returns a string
 * containing only the first `wordLimit` words. If the text contains more
 * words than the specified limit, an ellipsis ("...") is appended to the result.
 *
 * @param text - The input string to be truncated.
 * @param wordLimit - The maximum number of words to include in the truncated string.
 * @returns A truncated version of the input text with at most `wordLimit` words.
 *          If the input text has fewer words than `wordLimit`, the original text is returned.
 */
export const truncate = (text: string, wordLimit: number): string => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};
