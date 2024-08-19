import { describe, it } from "node:test";
import assert from "node:assert";
import {
  isEmptyString,
  alphabetical,
  alphabeticalUnique,
  camelize,
  fillString,
  stringConverter,
  mostRepeated,
  pascalize,
  truncate,
  snakeCased,
  kebabCased,
  stringConverterReversed,
} from "../../exercises/strings/strings_ex_2.js";

describe("strings_ex_2", () => {
  it("should check if string is empty", () => {
    assert.strictEqual(isEmptyString(""), true);
  });

  it("should return false when string is not empty", () => {
    assert.strictEqual(isEmptyString("j"), false);
  });

  it("should truncate the string if the length bigger then specified length", () => {
    const testCases = [
      {
        value: "some long string which should be truncated",
        limit: 10,
        expected: "some long...",
      },
      {
        value: "some long string which should be truncated",
        limit: 5,
        expected: "some...",
      },
    ];

    for (const { value, expected, limit } of testCases) {
      const actual = truncate(value, limit);
      assert.strictEqual(actual, expected);
    }
  });

  it("should fill the string with 0 when the length is less then 10 characters", () => {
    const testCases = [
      { value: "qwerty", expected: "0000qwerty" },
      { value: "morethentencharacters", expected: "morethentencharacters" },
      { value: "1234567890", expected: "1234567890" },
      { value: "1234", expected: "0000001234" },
    ];
    for (const { value, expected } of testCases) {
      const actual = fillString(value);
      assert.strictEqual(actual, expected);
    }
  });

  describe("text to pascal/camel/snake-kebab", () => {
    it("should return pascalized string from provided phrase", () => {
      const testCases = [
        { value: "hello world", expected: "HelloWorld" },
        { value: "HELLO WORLD", expected: "HelloWorld" },
        { value: "hELLO wORLD", expected: "HelloWorld" },
      ];
      for (const { value, expected } of testCases) {
        const actual = pascalize(value);
        assert.strictEqual(actual, expected);
      }
    });

    it("should return camelized string from provided phrase", () => {
      const testCases = [
        { value: "hello world", expected: "helloWorld" },
        { value: "HELLO WORLD", expected: "helloWorld" },
        { value: "hELLO wORLD", expected: "helloWorld" },
      ];
      for (const { value, expected } of testCases) {
        const actual = camelize(value);
        assert.strictEqual(actual, expected);
      }
    });

    it("should return snakeCased string from provided phrase", () => {
      const testCases = [
        { value: "hello world", expected: "hello_world" },
        { value: "HELLO WORLD", expected: "hello_world" },
        { value: "hELLO wORLD", expected: "hello_world" },
      ];
      for (const { value, expected } of testCases) {
        const actual = snakeCased(value);
        assert.strictEqual(actual, expected);
      }
    });

    it("should return kebabCased string from provided phrase", () => {
      const testCases = [
        { value: "hello world", expected: "hello-world" },
        { value: "HELLO WORLD", expected: "hello-world" },
        { value: "hELLO wORLD", expected: "hello-world" },
      ];
      for (const { value, expected } of testCases) {
        const actual = kebabCased(value);
        assert.strictEqual(actual, expected);
      }
    });
  });

  it("should return most repeated letter from the string", () => {
    const inputString = "hello world";

    const expected = { l: 3 };

    assert.deepStrictEqual(mostRepeated(inputString), expected);
  });

  it("should return letters form string in alphabetical order ", () => {
    const inputString = "hello world";
    assert.strictEqual(alphabetical(inputString), "dehllloorw");
  });

  it("should return unique letters from the string in alphabetical order", () => {
    const inputString = "hello world";
    assert.strictEqual(alphabeticalUnique(inputString), "dehlorw");
  });

  it("should convert string to specified string format", () => {
    const inputStrings = [
      {
        input: "hello beautiful world",
        expected: "helloBeautifulWorld",
        convertTo: "camel",
        errorMessage: "string not correctly converted to camel",
      },
      {
        input: "hello beautiful world",
        expected: "HelloBeautifulWorld",
        convertTo: "pascal",
        errorMessage: "string not correctly converted to pascal",
      },
      {
        input: "hello beautiful world",
        expected: "hello_beautiful_world",
        convertTo: "snake",
        errorMessage: "string not correctly converted to snake",
      },
      {
        input: "hello beautiful world",
        expected: "hello-beautiful-world",
        convertTo: "kebab",
        errorMessage: "string not correctly converted to snake",
      },
    ];

    for (const entry of inputStrings) {
      const actual = stringConverter(entry.input, entry.convertTo);
      assert.strictEqual(entry.expected, actual, entry.errorMessage);
    }
  });

  it("should reverse the conversion of the string", () => {
    const inputStrings = [
      {
        input: "helloBeautifulWorld",
        expected: "hello beautiful world",
        convertTo: "camel",
        errorMessage: "string not correctly converted form camel",
      },
      {
        input: "HelloBeautifulWorld",
        expected: "hello beautiful world",
        convertTo: "pascal",
        errorMessage: "string not correctly converted form pascal",
      },
      {
        input: "hello_beautiful_world",
        expected: "hello beautiful world",
        convertTo: "snake",
        errorMessage: "string not correctly converted form snake",
      },
      {
        input: "hello-beautiful-world",
        expected: "hello beautiful world",
        convertTo: "kebab",
        errorMessage: "string not correctly converted form snake",
      },
    ];

    for (const entry of inputStrings) {
      const actual = stringConverterReversed(entry.input, entry.convertTo);
      assert.deepEqual(entry.expected, actual, entry.errorMessage);
    }
  });
});
