import {describe, it} from "node:test";
import assert from "node:assert"
import {findBiggestTagHolder, findTheLongestDescription, findTheMostLonelyUser} from "../reduce.js";
import {users} from "../data/source-data.js";

describe('reduce', () => {
    it('should return biggest tags holder', () => {
        const holder = findBiggestTagHolder(users)

        assert.strictEqual(holder.tags.length, 12);
    });

    it('should return the most lonely person', () => {
        const person = findTheMostLonelyUser(users)
        assert.strictEqual(person.friends.length, 4)
    })

    it('should return the most lonely person', () => {
        const person = findTheLongestDescription(users)
        assert.strictEqual(person._id, '6609132533c5a8fd7bfa7be6')
        assert.strictEqual(person.about.length, 185)
    })
})
