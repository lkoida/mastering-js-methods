import { describe, it } from "node:test";
import assert from "node:assert";
import { users } from "../data/source-data.js";
import {
  sortedByRegDateAsc,
  sortedByRegDateDesc,
  sortedByTagsAsc,
  sortedByTagsDesc,
  sortedByBalanceDesc,
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
  it("should sort users by date asc", () => {
    const sortedUsers = sortedByRegDateAsc(users).map(
      (user) => user.registered
    );

    assert.deepStrictEqual(sortedUsers, expected);
  });

  it("should sort users by registeration date desc", () => {
    const sortedUsers = sortedByRegDateDesc(users).map(
      (user) => user.registered
    );

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("should sort users by tags amount asc", { skip: true }, () => {
    const sortedUsers = sortedByTagsAsc(users).map((user) => user.tags.length);

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("should sort users by tags amount desc", { skip: true }, () => {
    const sortedUsers = sortedByTagsDesc(users).map((user) => user.registered);

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });

  it("should sort users by balance desc", { skip: true }, () => {
    const sortedUsers = sortedByBalanceDesc(users).map(
      (user) => user.registered
    );

    assert.deepStrictEqual(sortedUsers, expected.toReversed());
  });
});
