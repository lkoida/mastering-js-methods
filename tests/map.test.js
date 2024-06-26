import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { users, famousInventors } from "../data/source-data.js";
import {
  mapBalance,
  mapTagsAndFriends,
  getFirstlastNameOfInventors,
} from "../exercises/map.js";

describe("map", () => {
  let mockUsers;
  beforeEach(() => {
    mockUsers = JSON.parse(JSON.stringify(users));
  });
  it("mapBalance", () => {
    const mappedUsersBalance = mapBalance(mockUsers);

    mappedUsersBalance.forEach((user) => {
      assert.strictEqual(user.balance.symbol, "$");
      assert.strictEqual(typeof user.balance.amount, "number");
    });
  });

  it("mapTagsAndFriends", () => {
    const mappedTagsAndFriends = mapTagsAndFriends(mockUsers);
    mappedTagsAndFriends.forEach((user, index) => {
      assert.strictEqual(typeof user.tags, "number");
      assert.strictEqual(typeof user.friends, "number");

      assert.strictEqual(users[index].tags.length, user.tags);
      assert.strictEqual(users[index].friends.length, user.friends);
    });
  });

  it("getFirstlastNameOfInventors", () => {
    const expected = [
      "Isaac Newton",
      "Marie Curie",
      "Johannes Kepler",
      "Galileo Galilei",
      "Max Planck",
      "Albert Einstein",
      "Hanna Hammarström",
      "Lise Meitner",
      "Nicolaus Copernicus",
      "Katherine Blodgett",
      "Ada Lovelace",
      "Sarah E. Goode",
    ];
    const inventorsNames = getFirstlastNameOfInventors(famousInventors);

    assert.deepStrictEqual(expected, inventorsNames);
  });
});
