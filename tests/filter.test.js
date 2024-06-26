import { describe, it } from "node:test";
import assert from "node:assert";
import { users, famousInventors } from "../data/index.js";
import {
  getByEyesColor,
  getUsersByFavoriteFruit,
  getUsersByGender,
  getUsersWithUnreadMessages,
  getInventorsBornIn1500,
} from "../exercises/array-collection/filter.js";

describe("filter", () => {
  describe("getByEyesColor", () => {
    it("should return users by eye color", () => {
      const eyeColors = ["blue", "brown", "green"];
      eyeColors.forEach((color) => {
        const greenEyedUsers = getByEyesColor(users, color);
        greenEyedUsers.forEach((user) => {
          assert.strictEqual(user.eyeColor, color);
        });
      });
    });

    it("should return an empty array when no users found with provided eye color", () => {
      assert.deepEqual([], getByEyesColor(users, "orange"));
    });
  });

  describe("getUsersByGender", () => {
    it("getUsersByGender", () => {
      const males = getUsersByGender(users, "male");
      males.forEach((user) => {
        assert.strictEqual(user.gender, "male");
      });
    });

    it("should return female users only", () => {
      const females = getUsersByGender(users, "female");
      females.forEach((user) => {
        assert.strictEqual(user.gender, "female");
      });
    });
  });

  it("getUsersByFavoriteFruit", () => {
    const males = getUsersByFavoriteFruit(users, "strawberry", "male");
    males.forEach((user) => {
      assert.ok(user.favoriteFruit === "strawberry" && user.gender === "male");
    });
  });

  it("getUsersWithUnreadMessages", () => {
    const usersUnreadMessages = getUsersWithUnreadMessages(users);

    usersUnreadMessages.forEach((user) => {
      assert.ok(user.greeting.includes("unread"));
    });

    assert.strictEqual(usersUnreadMessages.length < users.length, true);
  });

  it("getInventorsBornIn1500", () => {
    const inventorsfrom500 = getInventorsBornIn1500(famousInventors);
    inventorsfrom500.forEach((inventor) => {
      assert.ok(inventor.year < 1600 && inventor.year >= 1500);
    });
  });
});
