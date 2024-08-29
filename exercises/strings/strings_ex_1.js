/**
 * Return the array form the string
 * @param {string} str
 *
 * @returns {Array<string>}
 */
export const stringToArrayOfWords = (str) => {
};

/**
 *
 * @param {Array<string>} input
 * @param {string} delimiter
 *
 * return {string}
 */
export const arrayOfWordsToString = (input, delimiter) => {
}

/**
 *Convert string to upper case
 *
 * @param {string} input
 * @returns {string}
 */
export const convertStringToUpperCase = (input) => {
};

/**
 *Convert string to lower case
 * @param {string} input
 * @return {string}
 */
export const convertStringToLowerCase = (input) => {
};

/**
 * @param {string} inputString
 * @param {number} position
 */
export const getLetterFromPosition = (inputString, position) => {
};

/**
 * Create acronym from provided string
 * Example if the string 'hello world' is provided
 * then the 'HW' should be returned
 *
 * Use the split,reduce,charAt and toUpperCase methods
 * @param {string} input
 *
 * @returns {string}
 */
export const createAcronym_1 = (input) => {

};

/**
 * The same problem but another methods to use
 *
 * Methods: split, map,charAt ,join, toUpperCase
 *
 * @param {string} input
 *
 * @returns {string}
 */
export const createAcronym_2 = (input) => {

};

/**
 * Check if provided string is palindrome
 * Return true or false depending on result
 * (let's not take in consideration any special characters like comas and points)
 *
 * @param {string} input
 *
 * @returns {boolean}
 */
export const checkOnPalindrome = (input) => {
    // we use regular expression to remove all special characters from the string
    // In general, what this is means:
    // in `replace()` method we have slashes which tells us that we are using regular expression
    // inside the slashes we have square brackets which works as a range we want to find
    // inside the square brackets we have `^` which is a negation,
    // and then we have `a-zA-Z0-9` which is a range of characters we want to find,
    // and then we have `/g` which is a global flag,
    // so, in the end, we are saying that we want to find all characters that are not in the range of a-z, A-Z, and 0-9
    const stringWithoutSpecialCharacters = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};
