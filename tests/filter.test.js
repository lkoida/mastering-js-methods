import { describe, it } from "node:test";
import assert from "node:assert";
import { users, famousInventors } from "../data/source-data.js";
import {
  getByEyesColor,
  getUsersByFavoriteFruit,
  getUsersByGender,
  getUsersWithUnreadMessages,
  getInventorsBornIn1500,
} from "../exercises/filter.js";

describe("filter", () => {
  it("should return users with the green eye color", () => {
    const eyeColors = ["blue", "brown", "green"];
    eyeColors.forEach((color) => {
      const greenEyedUsers = getByEyesColor(users, color);
      greenEyedUsers.forEach((user) => {
        assert.strictEqual(user.eyeColor, color);
      });
    });
  });

  it("should throw an error if the color parameter is not in valid colors list", () => {
    assert.throws(
      () => getByEyesColor(users, "orange"),
      "/this eye color is not exist$/"
    );
  });

  it("should return only users with male gender", () => {
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

  it("should return males whose favorite fruit is strawberry", () => {
    const males = getUsersByFavoriteFruit(users, "strawberry", "male");
    males.forEach((user) => {
      assert.ok(user.favoriteFruit === "strawberry" && user.gender === "male");
    });
  });

  it("should return users with unread messages only", () => {
    const usersUnreadMessages = getUsersWithUnreadMessages(users);

    usersUnreadMessages.forEach((user) => {
      assert.ok(user.greeting.includes("unread"));
    });

    assert.strictEqual(usersUnreadMessages.length < users.length, true);
  });

  it("should return inventors lived in 500`s", () => {
    const inventorsfrom500 = getInventorsBornIn1500(famousInventors);
    inventorsfrom500.forEach((inventor) => {
      assert.ok(inventor.year < 1600 && inventor.year >= 1500);
    });
  });
});
