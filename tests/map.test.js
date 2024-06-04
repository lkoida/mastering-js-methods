import {describe, it, beforeEach} from "node:test";
import assert from "node:assert"
import {users} from "../data/source-data.js";
import {mapBalance, mapTagsAndFriends} from "../map.js";

describe('map', () => {
    let mockUsers
    beforeEach(() => {
        mockUsers = JSON.parse(JSON.stringify(users))
    })
    it('should return collection of users with mapped balance', () => {
        const mappedUsersBalance = mapBalance(mockUsers)

        mappedUsersBalance.forEach(user => {
            assert.strictEqual(user.balance.symbol, "$");
            assert.strictEqual(typeof user.balance.amount, "number");
        })
    })

    it('should return total number of tags and friends for each user', () => {
        const mappedTagsAndFriends = mapTagsAndFriends(mockUsers)
        mappedTagsAndFriends.forEach((user, index) => {
            assert.strictEqual(typeof user.tags, "number");
            assert.strictEqual(typeof user.friends, "number");

            assert.strictEqual(users[index].tags.length, user.tags);
            assert.strictEqual(users[index].friends.length, user.friends);
        })
    });
})
