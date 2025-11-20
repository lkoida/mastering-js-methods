import { describe, it } from "node:test";
import assert from "node:assert";
import { citiesList } from "../../data/index.js";
import {
  countTotalPopulationGroupedByAlphabet,
  createAlphabeticalCollection,
  getCitiesWithPopulationMoreThenCriteria,
  isMatrixRowFilled,
  isMatrixColumnFilled
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


  it("isMatrixRowFilled should return false as no values provided in matrix", () => {
    const matrix = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ]

    const result = isMatrixRowFilled(matrix)

    assert.deepEqual(result, false, 'Result should be false')
  })


  it("isMatrixRowFilled should return false when row not contain equal values", () => {
    const matrix = [
      [undefined, undefined, undefined],
      [1, 1, 2],
      [undefined, undefined, undefined],
    ]

    const result = isMatrixRowFilled(matrix)

    assert.deepEqual(result, false, 'Result should be false')
  })

  it("isMatrixRowFilled should return true when at least one row is filled with equal number", () => {
    const matrix = [
      [undefined, undefined, undefined],
      [1, 1, 1],
      [undefined, undefined, undefined],
    ]

    const result = isMatrixRowFilled(matrix)

    assert.deepEqual(result, true, 'Result should be true')
  })


  it("isMatrixColumnFilled should return false when no data in columns are present", () => {
    const matrix = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ]

    const result = isMatrixColumnFilled(matrix)

    assert.deepEqual(result, false, 'Result should be false when no data in matrix')
  })

    it("isMatrixColumnFilled should return true when column is filled with the same data", () => {
    const matrix = [
      [undefined, 1, undefined],
      [undefined, 1, undefined],
      [undefined, 1, undefined],
    ]

    const result = isMatrixColumnFilled(matrix)

    assert.deepEqual(result, true, 'Result should be true when one collumn is filled wwith the same data')
  })

     it("isMatrixColumnFilled should return false when column is filled with different data", () => {
    const matrix = [
      [undefined, 1, undefined],
      [undefined, 2, undefined],
      [undefined, 4, undefined],
    ]

    const result = isMatrixColumnFilled(matrix)

    assert.deepEqual(result, false, 'Result should be false when columns values are not the same')
  })
});
