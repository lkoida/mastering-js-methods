import { describe, it } from "node:test";
import assert from "node:assert";
import {
  aggregateByName,
  aggregateByNameAndAge,
  findBiggestTagHolder,
  findTheLongestDescription,
  findTheMostLonelyUser,
  totalYearsOfLive,
  countTotalPopulation,
} from "../../exercises/array-collection/reduce.js";
import { famousInventors, users, citiesList } from "../../data/index.js";

describe("reduce", () => {
  it("findBiggestTagHolder", () => {
    const holder = findBiggestTagHolder(users);

    assert.strictEqual(holder.tags.length, 12);
  });

  it("findTheMostLonelyUser", () => {
    const person = findTheMostLonelyUser(users);
    assert.strictEqual(person.friends.length, 4);
  });

  it("findTheLongestDescription", () => {
    const person = findTheLongestDescription(users);
    assert.strictEqual(person._id, "660913259f46114d2b8cb4f0");
    assert.strictEqual(person.about.length, 483);
  });

  it("aggregateByName", () => {
    const expected = [
      "Mendoza Trujillo",
      "Barnett Odonnell",
      "Ashlee Hubbard",
      "Kathy Mcgowan",
      "Tammi Jennings",
      "Bartlett Rosales",
      "Sutton Walls",
      "Hyde Mayer",
      "Hood Rivas",
      "Beasley Hurley",
    ];
    const names = aggregateByName(users);
    assert.deepEqual(names, expected);
  });

  it("aggregateByNameAndAge", () => {
    const expected = [
      { "Mendoza Trujillo": 32 },
      { "Barnett Odonnell": 49 },
      { "Ashlee Hubbard": 48 },
      { "Kathy Mcgowan": 25 },
      { "Tammi Jennings": 26 },
      { "Bartlett Rosales": 31 },
      { "Sutton Walls": 33 },
      { "Hyde Mayer": 20 },
      { "Hood Rivas": 32 },
      { "Beasley Hurley": 48 },
    ];
    const names = aggregateByNameAndAge(users);
    assert.deepEqual(names, expected);
  });

  it("totalYearsOfLive", () => {
    const total = totalYearsOfLive(famousInventors);

    assert.strictEqual(total, 861);
  });

  it("countTotalPopulation", () => {
    const total = countTotalPopulation(citiesList);
    assert.equal(total, 4242579017);
  });
});
