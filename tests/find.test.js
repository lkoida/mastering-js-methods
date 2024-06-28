import {describe, it} from "node:test";
import assert from "node:assert";
import {
    findActive,
    findByUserFriendName,
    findPersonByFirstName,
    findPersonByLastName,
    findPersonByLastNameEndsWith,
    findPersonByLastNameStartsWith,
    findPersonLastNameContains,
} from "../exercises/array-collection/find.js";
import {users, people} from "../data/index.js";

describe("find", () => {
    it("findPersonByLastName", () => {
        let result = findPersonByLastName(people);
        assert.equal(result, 'Beckett, Samuel');
    })
    it("findPersonByFirstName", () => {
        let result = findPersonByFirstName(people);
        assert.equal(result, 'Beethoven, Ludwig');
    })
    it("findPersonByLastNameStartsWith", () => {
        let result = findPersonByLastNameStartsWith(people);
        assert.equal(result, 'Bentsen, Lloyd');
    })
    it("findPersonByLastNameEndsWith", () => {
        let result = findPersonByLastNameEndsWith(people);
        assert.equal(result, 'Bergman, Ingmar');
    })
    it("findPersonLastNameContains", () => {
        let result = findPersonLastNameContains(people);
        assert.equal(result, "Benenson, Peter");
    })

    it("findActive", () => {
        const activeUser = findActive(users);
        assert.strictEqual(activeUser._id, "66091325c9ca3a42798248ae");
    });

    it("findByUserFriendName", () => {
        const expectedFriendName = "Lidia";
        const user = findByUserFriendName(users, expectedFriendName);

        assert.strictEqual(
            user.friends.some((friend) => friend.firstName === expectedFriendName),
            true
        );
    });

    it("should return null if no friend found", () => {
        const expectedFriendName = "Pablo";
        const user = findByUserFriendName(users, expectedFriendName);

        assert.strictEqual(user, undefined);
    });
});
