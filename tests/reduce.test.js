import {describe, it} from "node:test";
import assert from "node:assert"
import {
    aggregateByName,
    aggregateByNameAndAge,
    findBiggestTagHolder,
    findTheLongestDescription,
    findTheMostLonelyUser
} from "../reduce.js";
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

    it('should return array of users names and surnames', () => {
        const expected = [
            "Mendoza Trujillo",
            "Barnett Odonnell",
            "Ashlee Hubbard",
            'Kathy Mcgowan',
            "Tammi Jennings",
            "Bartlett Rosales",
            "Sutton Walls",
            "Hyde Mayer",
            "Hood Rivas",
            "Beasley Hurley"
        ]
        const names = aggregateByName(users)
        assert.deepEqual(names, expected)
    });


    it('should return array of users names, surnames and age as array of objects', () => {
        const expected = [
            {"Mendoza Trujillo": 32},
            {"Barnett Odonnell": 49},
            {"Ashlee Hubbard": 48},
            {'Kathy Mcgowan': 25},
            {"Tammi Jennings": 26},
            {"Bartlett Rosales": 31},
            {"Sutton Walls": 33},
            {"Hyde Mayer": 20},
            {"Hood Rivas": 32},
            {"Beasley Hurley": 48}
        ]
        const names = aggregateByNameAndAge(users)
        assert.deepEqual(names, expected)
    });
})
