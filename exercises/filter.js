/**
 * filter the users by eyes color
 * write a function which take as first argument a users collection and  the eye color as second argument, and return the array of users with that color
 * It should throw an error if the color provided in not exist in allowed colors of eyes
 * possible colors are: blue/brown/green
 *
 * @param {import('../types/user.type').User[]} users
 * @param {('blue'|'brown'|'green')} color
 */
export const getByEyesColor = (users, color) => {
    if (!['blue', 'brown', 'green'].includes(color)) {
        throw new Error("this eye color is not exist")
    }

}

/**
 * filter the users by gender
 *
 * write a function which take as first argument a users collection,
 * the gender fruit as second argument,
 * and return the array of users of given gender
 *
 * possible genders are: male/female
 *
 * @param {import('../types/user.type').User[]} users
 * @param {("male" | "female")} gender
 */
export const getUsersByGender = (users, gender) => {

}

/**
 * filter the users by favorite fruit and gender
 *
 * write a function which take as first argument a users collection,
 * the favorite fruit as second argument,
 * the gender as third argument
 * and return the array of users of given gender who loves the given fruit
 *
 * possible genders are: male/female
 * possible fruits are: apple/banana/strawberry
 *
 * @param {import('../types/user.type').User[]} users
 * @param  {('apple'|'banana'|'strawberry')} favoriteFruit
 * @param {('male'|'female')} gender
 */
export const getUsersByFavoriteFruit = (users, favoriteFruit, gender) => {

};

/**
 * filter the users by unread messages (you can find them in the `greeting` property value)
 * @param {import('../types/user.type').User[]} users
 */
export const getUsersWithUnreadMessages = (users) => {

}

