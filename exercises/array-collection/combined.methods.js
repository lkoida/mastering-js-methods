/**
 * count population in cities grouped alphabetically by first letter
 * methods which could be helpfull
 * split() - create array form string dividing it by provided argument
 * trim() - to remove useles spaces form start and end of the string
 * parseInt() - to cast string value to number
 * charAt() - to get the letter/character from the provided position
 *
 * @param {import('../../types/cities-list.type').CitiesList} citiesList
 *
 * @returns {{[String]: Number}}
 */
export const countTotalPopulationGroupedByAlphabet = (citiesList) => {};

/**
 * Create a function wich will take as argument list of cities
 * and return the object in next format
 * {
 *   "A" : [cities which start form letter A],
 *   "B" : [cities which start from letter B],
 *   ...
 * }
 *
 * helper methods:
 *
 * toSorted() - to sort first the array from A-Z
 *
 * reduse() - to aggregate the result
 * charAt() - to get the character/letter from the provided position
 *
 * operator `in` to check if the key exists in object
 * includes() to check if value exists in array
 * push() to push new value in array
 *
 * @param {import('../../types/cities-list.type').CitiesList} citiesList
 */
export const createAlphabeticalCollection = (citiesList) => {};
