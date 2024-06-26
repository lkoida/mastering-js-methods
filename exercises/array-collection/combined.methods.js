/**
 * Filter cities which have population more than minPopulation param
 *
 * methods to be used:
 * split() - to split string as array
 * trim() - to remove the forward and trailing spaces from the string
 * parseInt() - to convert the string representation of the number to number type
 *
 * @param {import('../../data/cities-list').citiesList} citiesList
 * @param {Number} [minPopulation=125000]
 */

export const getCitiesWithPopulationMoreThenCriteria = (
  citiesList,
  minPopulation = 12500000
) => {};

/**
 * count population in cities grouped alphabetically by first letter
 * methods which could be helpful
 * split() - create array form string dividing it by provided argument
 * trim() - to remove useless spaces form start and end of the string
 * parseInt() - to cast string value to number
 * charAt() - to get the letter/character from the provided position
 *
 * @param {import('../../data/cities-list').citiesList} citiesList
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
 * reduce() - to aggregate the result
 * charAt() - to get the character/letter from the provided position
 *
 * operator `in` to check if the key exists in object
 * includes() to check if value exists in array
 * push() to push new value in array
 *
 * @param {import('../../data/cities-list').citiesList} citiesList
 */
export const createAlphabeticalCollection = (citiesList) => {};
