/**
 * Methods which could be used in that section
 * - toSorted() main method to sort data
 * - Date.parce() - to convert string to numeric view of the day
 * - replace() - to fix the spaces in string representation of the date
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
 *
 * How to compare dates in JS - check this article
 * @see https://www.freecodecamp.org/news/javascript-date-comparison-how-to-compare-dates-in-js/
 **/

/**
 * sort users by registration date ascending
 * @param {import('../../data/users').users} users
 */
export const sortedByRegDateAsc = (users) => {};

/**
 * sort users by registration date descending
 * @param {import('../../data/users').users} users
 */
export const sortedByRegDateDesc = (users) => {};

/**
 * sort users by tags amount ascending
 *
 * @param {import('../../data/users').users} users
 */
export const sortedByTagsAsc = (users) => {};

/**
 * sort users by tags amount descending
 *
 * @param {import('../../data/users').users} users
 */
export const sortedByTagsDesc = (users) => {};

/**
 * sort user by balance
 *
 * @param {import('../../data/users').users} users
 */

export const sortedByBalanceDesc = (users) => {};

/**
 * Sort the inventors by birthdate, oldest to youngest
 * @param {import('../../data/famous-inventors').famousInventors} inventors
 */
export const sortedInventorsOldestYoungest = (inventors) => {};

/**
 * sort cities asc/desc depending on the argument provided in the function params
 * By default, if no sort direction specified it should sort in ASC order
 *
 * @param {import('../../data/cities-list').citiesList} citiesList
 * @param {("ASC" | "DESC")} [dir=ASC]
 */
export const sortCities = (citiesList, dir = "ASC") => {};

/**
 *
 * @param {import('../../data/cities-list').citiesList} citiesList
 *
 * @returns {String[]}
 */
export const sortCitiesByPopulation = (citiesList) => {};
