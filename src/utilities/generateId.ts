/**
 * Generates a unique identifier.
 *
 * This function returns a unique numeric identifier each time it is called.
 * It starts from 1 and increments by 1 with each call.
 *
 * @returns {number} A unique identifier.
 */
let nextId = 1;
export const generateId = () => nextId++;
