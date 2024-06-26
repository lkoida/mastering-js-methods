import { describe, it } from "node:test";
import assert from "node:assert";
import { findActive, findByUserFriendName } from "../exercises/find.js";
import { users } from "../data/source-data.js";

describe("find", () => {
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
