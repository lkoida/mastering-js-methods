import { describe, it } from "node:test";
import assert from "node:assert";
import {
  createAcronym_1,
  createAcronym_2,
  checkOnPalindrome,
  convertStringToUpperCase,
  convertStringToLowerCase,
  getletterFromPosition,
} from "../../exercises/strings/strings_ex_1.js";

describe("strings_1", () => {
  it("should return uppercased string", () => {
    assert.strictEqual(convertStringToUpperCase("Hello World"), "HELLO WORLD");
  });

  it("should return lowercased string", () => {
    assert.strictEqual(convertStringToLowerCase("Hello World"), "hello world");
  });

  it("should return character form the position", () => {
    const assertions = [
      { string: "hello world", charAt: 1, expected: "e" },
      { string: "hello world", charAt: 2, expected: "l" },
      { string: "hello world", charAt: 0, expected: "h" },
      { string: "hello world", charAt: 5, expected: " " },
    ];

    for (const { string, charAt, expected } of assertions) {
      assert.strictEqual(getletterFromPosition(string, charAt), expected);
    }
  });


  //   it("should render the acronym form provided string", () => {
  //     assert.strictEqual(createAcronym_1("some funny string"), "SFS");
  //   });
  //   it("should render the acronym form provided string with different implementation", () => {
  //     assert.strictEqual(createAcronym_2("some funny string"), "SFS");
  //   });

  //   it("should return true if string is palindrome", () => {
  //     assert.equal(checkOnPalindrome("А роза упала на лапу азора"), true);
  //   });
});
