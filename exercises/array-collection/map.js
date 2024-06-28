/**
 * Create an array of just the first names.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfTheFirstNames = (people) => {
};

/**
 * Create an array of just the last names.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfTheLastNames = (people) => {
};

/**
 * Create an array of objects with properties `firstName` and `lastName`.
 * it should look like
 *  [
 *      {firstName: lastName}
 *      ...
 *  ]
 * @param {import('../../data/people').people} people
 */
export const getFirstLastNameAsArrayOfObjects = (people) => {

};

/**
 * Create an array of names in the format "firstName lastName".
 * it should look like
 * [
 *     "firstName lastName",
 *     ...
 * ]
 * @param {import('../../data/people').people} people
 */
export const getArrayOfFirstLastName = (people) => {

};

/**
 * Create an array of names in uppercase.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfUpperCased = (people) => {
};

/**
 * Create an array of names in lowercase.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfLowerCased = (people) => {
};

/**
 * Create an array indicating the length of each person's name (including the comma and space).
 * @param {import('../../data/people').people} people
 */
export const getArrayOfFirstLastLength = (people) => {
};

/**
 * Create an array of the first character of each person's last name.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfFirstLetterFromPersonLastName = (people) => {
};

/**
 * Create an array of the first character of each person's first name.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfFirstLetterFromPersonFirstName = (people) => {
};

/**
 *  Create an array of objects with properties `firstNameLength` and `lastNameLength`.
 *  result should be like:
 *  [
 *      {"firstNameLength": 12, "lastNameLength": 23}
 *      ...
 *  ]
 * @param {import('../../data/people').people} people
 */
export const getArrayOfLengthForFirstAndLastName = (people) => {

};

/**
 *  Create an array of names reversed (e.g., "Bernhard, Sandra" -> "ardnaS ,drahnerB").
 * @param {import('../../data/people').people} people
 */
export const getArrayOfReversedNames = (people) => {
};

/**
 *  Create an array of initials (e.g., "Bernhard, Sandra" -> "S.B.").
 * @param {import('../../data/people').people} people
 */
export const getArrayOfInitials = (people) => {

};

/**
 *  Create an array of names with the last names capitalized.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfNamesLastNameCapitalized = (people) => {

};

/**
 *  Create an array of names with the first names capitalized.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfNamesFirstNameCapitalized = (people) => {

};

/**
 *  Create an array of names in reverse order (e.g., "Sandra Bernhard").
 * @param {import('../../data/people').people} people
 */
export const getArrayOfNameReversedOrder = (people) => {

};

/**
 *  Create an array where each name is followed by the length of that name.
 *  result should be like:
 *  [
 *      "Bernhard, Sandra (16)",
 *      ...
 *  ]
 * @param {import('../../data/people').people} people
 */
export const getArrayWithNameAndLength = (people) => {
};

/**
 *  Create an array of objects with properties `fullName` and `initials`.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfTheFullNamesAndInitials = (people) => {

};

/**
 *  Create an array of names with first names in lowercase and last names in uppercase.
 * @param {import('../../data/people').people} people
 */
export const getArrayOfLastNameUpperAndFirstNameLower = (people) => {

};

/**
 *  Create an array of names where the first name is in parentheses (e.g., "Bernhard, Sandra" -> "Bernhard (Sandra)").
 * @param {import('../../data/people').people} people
 */
export const getArrayOfNamesWithTheFirstNameInRoundBrackets = (people) => {

};


/**
 * using array.map() method
 * return collection of users where the balance string property will become an object
 * {
 *     ... more fields
 *     balance: {
 *         symbol: <extract the symbol from string with substring() method>,
 *         amount: <extract the number part from string with substring() method, remove the coma using replace() method and convert to number using Number()>
 *     }
 *     ... rest of the fields
 * }
 *
 * @param {import('../../data/users').users} users
 */
export const mapBalance = (users) => {
};

/**
 * using map() method
 * return users collection
 * where values for properties `tags` and `friends` will be replaced by total count of tags and friends per each user
 * it should look somehow like this
 *
 * {
 *     ... more properties
 *
 *     tags: <total number of tags>,
 *     friends: <total number of friends>,
 *
 *     ... rest of the properties
 * }
 *
 * @param {import('../../data/users').users} users
 */
export const mapTagsAndFriends = (users) => {
};

/**
 *  Give us an array of the inventors first and last names
 *
 * @param {import('../../data/famous-inventors').famousInventors} inventors
 */
export const getFirstLastNameOfInventors = (inventors) => {
};

/**
 * Return an array of people with  flipped first and last name
 *
 * @param {import('../../data/people').people} people
 */

export const peopleFlippedFirstLastName = (people) => {
};
