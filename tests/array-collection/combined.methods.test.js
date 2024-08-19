import { describe, it } from "node:test";
import assert from "node:assert";
import { citiesList } from "../../data/index.js";
import {
  countTotalPopulationGroupedByAlphabet,
  createAlphabeticalCollection,
  getCitiesWithPopulationMoreThenCriteria,
} from "../../exercises/array-collection/combined.methods.js";

describe("Combined methods", () => {
  it("countTotalPopulationGroupedByAlphabet", () => {
    const expected = {
      L: 211618146,
      N: 151817540,
      R: 248661519,
      D: 71864859,
      E: 120177475,
      B: 356390680,
      T: 34597755,
      K: 181035922,
      M: 385117901,
      G: 124119298,
      H: 215627392,
      A: 166693453,
      C: 805216045,
      S: 402485165,
      W: 358766723,
      J: 179795421,
      U: 49292957,
      I: 5296080,
      O: 19040873,
      F: 154963813,
    };
    const actual = countTotalPopulationGroupedByAlphabet(citiesList);
    assert.deepStrictEqual(actual, expected);
  });

  it("createAlphabeticalCollection", () => {
    const collection = createAlphabeticalCollection(citiesList);

    const expectedKeys = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "R",
      "S",
      "T",
      "U",
      "W",
    ];
    const actualKeys = Object.keys(collection);

    assert.deepStrictEqual(expectedKeys, actualKeys);

    expectedKeys.forEach((key) => {
      const cities = collection[key];
      assert.ok(cities.every((city) => city.startsWith(key)));
    });
  });

  it("getCitiesWithPopulationMoreThenCriteria", () => {
    const actual = getCitiesWithPopulationMoreThenCriteria(citiesList);

    actual.forEach((city) => {
      const [, right] = city.split("-");
      const trimmed = right.trim();

      const population = parseInt(trimmed);

      assert.ok(population > 12500000);
    });
  });
});
