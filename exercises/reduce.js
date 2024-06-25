/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

/**
 * find user who have the biggest amount of tags
 * @param {import('../types/user.type').User[]} users
 * @returns {*}
 */
export const findBiggestTagHolder = (users) => {};

/**
 * find the user who have the fewest number of friends
 * @param {import('../types/user.type').User[]} users
 * @returns {*}
 */
export const findTheMostLonelyUser = (users) => {};

/**
 * find user who have the longest description
 * @param {import('../types/user.type').User[]} users
 * @returns {*}
 */
export const findTheLongestDescription = (users) => {};

/**
 * Extract users names into array of full names
 * write response in the array with the given structure
 * [ 'firstName surname', ... ]
 * @param {Array.<Object>} users
 */
export const aggregateByName = (users) => {};

/**
 * Extract users names, surname and age into collection
 * write response in the object with the given structure
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
 * [
 *  {"firstName surname": age }
 * ]
 * @param {Array.<Object>} users
 */
export const aggregateByNameAndAge = (users) => {};

/**
 * How many years did all the inventors live all together?
 * @param {import('../types/inventor.type').Inventor[]} inventors
 */
export const totalYearsOfLive = (inventors) => {};

/**
 * return total population of all cities
 * @param {import('../types/cities-list.type').CitiesList} citiesList
 */
export const countTotalPopulation = (citiesList) => {};
