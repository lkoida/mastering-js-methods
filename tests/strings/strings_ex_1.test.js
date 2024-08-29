import {describe, it} from "node:test";
import assert from "node:assert";
import {
    createAcronym_1,
    createAcronym_2,
    checkOnPalindrome,
    convertStringToUpperCase,
    convertStringToLowerCase,
    getLetterFromPosition,
    stringToArrayOfWords,
    arrayOfWordsToString,
} from "../../exercises/strings/strings_ex_1.js";

describe("strings_1", () => {

    it("should convert a string to an array of words", () => {
        const testCases = [
            {input: "hello world", expected: ["hello", "world"]},
            {input: "a b c", expected: ["a", "b", "c"]},
            {input: "one two three", expected: ["one", "two", "three"]},
            {input: "singleword", expected: ["singleword"]},
            {input: "", expected: [""]},
        ];

        for (const {input, expected} of testCases) {
            assert.deepStrictEqual(stringToArrayOfWords(input), expected);
        }
    });

    it("should join an array of words into a string with the given delimiter", () => {
        const testCases = [
            {input: ["hello", "world"], delimiter: " ", expected: "hello world"},
            {input: ["a", "b", "c"], delimiter: "-", expected: "a-b-c"},
            {input: ["one", "two", "three"], delimiter: ",", expected: "one,two,three"},
            {input: ["singleword"], delimiter: " ", expected: "singleword"},
            {input: [], delimiter: " ", expected: ""},
        ];

        for (const {input, delimiter, expected} of testCases) {
            assert.strictEqual(arrayOfWordsToString(input, delimiter), expected);
        }
    });

    it("should return uppercased string", () => {
        assert.strictEqual(convertStringToUpperCase("Hello World"), "HELLO WORLD");
    });

    it("should return lowercased string", () => {
        assert.strictEqual(convertStringToLowerCase("Hello World"), "hello world");
    });

    it("should return character form the position", () => {
        const assertions = [
            {string: "hello world", charAt: 1, expected: "e"},
            {string: "hello world", charAt: 2, expected: "l"},
            {string: "hello world", charAt: 0, expected: "h"},
            {string: "hello world", charAt: 5, expected: " "},
        ];

        for (const {string, charAt, expected} of assertions) {
            assert.strictEqual(getLetterFromPosition(string, charAt), expected);
        }
    });


    it("should create an acronym from a provided string", () => {
        const testCases = [
            {input: "hello world", expected: "HW"},
            {input: "some funny string", expected: "SFS"},
            {input: "JavaScript Object Notation", expected: "JON"},
            {input: "HyperText Markup Language", expected: "HML"},
            {input: "singleword", expected: "S"},
            {input: "", expected: ""},
        ];

        for (const {input, expected} of testCases) {
            assert.strictEqual(createAcronym_1(input), expected);
        }
    });
    it("should create an acronym from a provided string using split, map, charAt, join, and toUpperCase methods", () => {
        const testCases = [
            {input: "hello world", expected: "HW"},
            {input: "some funny string", expected: "SFS"},
            {input: "JavaScript Object Notation", expected: "JON"},
            {input: "HyperText Markup Language", expected: "HML"},
            {input: "singleword", expected: "S"},
            {input: "", expected: ""},
        ];

        for (const {input, expected} of testCases) {
            assert.strictEqual(createAcronym_2(input), expected);
        }
    });

    it("should return true for palindromes and false for non-palindromes", () => {
        const testCases = [
            { input: "A man a plan a canal Panama", expected: true },
            { input: "racecar", expected: true },
            { input: "hello", expected: false },
            { input: "No lemon, no melon", expected: true },
            { input: "Was it a car or a cat I saw", expected: true },
            { input: "Not a palindrome", expected: false },
            { input: "А роза упала на лапу азора", expected: true },
        ];

        for (const { input, expected } of testCases) {
            assert.strictEqual(checkOnPalindrome(input), expected);
        }
    });
});
