import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { users, famousInventors, people } from "../data/index.js";
import {
  mapBalance,
  mapTagsAndFriends,
  getFirstlastNameOfInventors,
  peopleFlippedFirstLastName,
} from "../exercises/array-collection/map.js";

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

  it("peopleFlippedFirstLastName", () => {
    const expected = [
      "Sandra, Bernhard",
      "Erin, Bethea",
      "Carl, Becker",
      "Lloyd, Bentsen",
      "Samuel, Beckett",
      "William, Blake",
      "Ric, Berger",
      "Mick, Beddoes",
      "Ludwig, Beethoven",
      "Hilaire, Belloc",
      "Menachem, Begin",
      "Saul, Bellow",
      "Robert, Benchley",
      "Robert, Blair",
      "Peter, Benenson",
      "Walter, Benjamin",
      "Irving, Berlin",
      "Tony, Benn",
      "Leana, Benson",
      "Silas, Bent",
      "Milton, Berle",
      "Halle, Berry",
      "Steve, Biko",
      "Glenn, Beck",
      "Ingmar, Bergman",
      "Elk, Black",
      "Luciano, Berio",
      "Eric, Berne",
      "Yogi, Berra",
      "Wendell, Berry",
      "Aneurin, Bevan",
      "David, Ben-Gurion",
      "Ken, Bevel",
      "Joseph, Biden",
      "Chester, Bennington",
      "Ambrose, Bierce",
      "Josh, Billings",
      "Augustine, Birrell",
      "Tony, Blair",
      "Henry, Beecher",
      "Frank, Biondo",
    ];
    const actual = peopleFlippedFirstLastName(people);

    assert.deepStrictEqual(expected, actual);
  });
});
