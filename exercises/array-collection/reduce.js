/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

/**
 * find user who have the biggest amount of tags
 * @param {import('../../data/users').users} users
 * @returns {*}
 */
export const findBiggestTagHolder = (users) => {
    return users.reduce((acc, user) => {
        if (user.tags.length > acc.tags.length) {
            return user;
        }
        return acc;
    })
};

/**
 * find the user who have the fewest number of friends
 * @param {import('../../data/users').users} users
 * @returns {*}
 */
export const findTheMostLonelyUser = (users) => {
    return users.reduce((acc, user) => {
        if (user.friends.length < acc.friends.length) {
            return user;
        }
        return acc;
    })
};

/**
 * find user who have the longest description
 * @param {import('../../data/users').users} users
 * @returns {*}
 */
export const findTheLongestDescription = (users) => {
    return users.reduce((acc, user) => {
        if (user.about.length > acc.about.length) {
            return user;
        }
        return acc;
    })
};

/**
 * Extract users names into array of full names
 * write response in the array with the given structure
 * [ 'firstName surname', ... ]
 * @param {import('../../data/users').users} users
 */
export const aggregateByName = (users) => {
    return users.reduce((acc, user) => {
        acc.push(`${user.firstName} ${user.surname}`);
        return acc;
    }, []);
};

/**
 * Extract users names, surname and age into collection
 * write response in the object with the given structure
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
 * [
 *  {"firstName surname": age }
 * ]
 * @param {import('../../data/users').users} users
 */
export const aggregateByNameAndAge = (users) => {
    return users.reduce((acc, user) => {
        acc.push({[`${user.firstName} ${user.surname}`]: user.age});
        return acc;
    }, []);
};

/**
 * How many years did all the inventors live all together?
 * @param {import('../../data/famous-inventors').famousInventors} inventors
 */
export const totalYearsOfLive = (inventors) => {
    return inventors.reduce((acc, inventor) => {
        return acc + (inventor.passed - inventor.year);
    }, 0);
};

/**
 * return total population of all cities
 * @param {import('../../data/cities-list').citiesList} citiesList
 */
export const countTotalPopulation = (citiesList) => {
    return citiesList.reduce((acc, city) => {
        return acc + parseInt(city.split(' - ')[1]);
    }, 0);
};
