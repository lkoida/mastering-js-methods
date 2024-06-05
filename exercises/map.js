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
 * @param {import('../types/user.type').User[]} users
 */
export const mapBalance = (users) => {

}

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
 * @param {import('../types/user.type').User[]} users
 */
export const mapTagsAndFriends = (users) => {

}
