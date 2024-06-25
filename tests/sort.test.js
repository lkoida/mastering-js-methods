import { describe, it } from "node:test";
import assert from "node:assert";
import { users, famousInventors } from "../data/source-data.js";
import { citiesList } from "../data/cities-list.js";
import {
  sortedByRegDateAsc,
  sortedByRegDateDesc,
  sortedByTagsAsc,
  sortedByTagsDesc,
  sortedByBalanceDesc,
  sortedInventorsOldestYoungest,
  sortCities,
  sortCitiesByPopulation,
} from "../exercises/sort.js";

describe("sort", () => {
  const expected = [
    "2015-02-21T09:06:13 -02:00",
    "2015-04-08T07:13:39 -03:00",
    "2015-06-28T09:56:54 -03:00",
    "2017-05-10T07:56:18 -03:00",
    "2017-12-26T05:50:07 -02:00",
    "2018-05-01T02:49:39 -03:00",
    "2018-08-08T12:47:00 -03:00",
    "2018-08-17T05:51:30 -03:00",
    "2020-05-06T10:00:19 -03:00",
    "2023-11-22T08:56:36 -02:00",
  ];
  it("sortedByRegDateAsc", () => {
    const sortedUsers = sortedByRegDateAsc(users).map(
      (user) => user.registered
    );

    assert.deepStrictEqual(sortedUsers, expected);
  });

  it("sortedByRegDateDesc", () => {
    const sortedUsers = sortedByRegDateDesc(users).map(
      (user) => user.registered
    );

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("sortedByTagsAsc", () => {
    const sortedUsers = sortedByTagsAsc(users).map((user) => user.tags.length);

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("sortedByTagsDesc", () => {
    const sortedUsers = sortedByTagsDesc(users).map((user) => user.registered);

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("sortedByBalanceDesc", () => {
    const sortedUsers = sortedByBalanceDesc(users).map(
      (user) => user.registered
    );

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("sortedInventorsOldestYoungest", () => {
    const expected = [
      { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
      { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
      { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
      { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
      { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
      { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
      { first: "Max", last: "Planck", year: 1858, passed: 1947 },
      { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
      { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
      { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
      { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    ];
    const sortedInventors = sortedInventorsOldestYoungest(famousInventors);

    assert.deepStrictEqual(expected, sortedInventors);
  });

  it("sortCities", () => {
    const resAsc = sortCities(citiesList, "ASC");
    const resDesc = sortCities(citiesList, "DESC");

    assert.ok(
      resAsc[0] === "Aberdeen - 63730168" &&
        resAsc[resAsc.length - 1] === "Wyoming - 52531432"
    );
    assert.ok(
      resDesc[0] === "Wyoming - 52531432" &&
        resDesc[resDesc.length - 1] === "Aberdeen - 63730168"
    );
  });

  it("sortCitiesByPopulation", () => {
    const result = sortCitiesByPopulation(citiesList);

    assert.equal(result[0], "Springhill - 125862");
    assert.equal(result[result.length - 1], "Fidelis - 89805567");
  });
});
