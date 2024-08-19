import { describe, it } from "node:test";
import assert from "node:assert";
import {createAcronym_1, createAcronym_2, checkOnPalindrome} from "../../exercises/strings/strings_ex_1.js";

describe('strings_1', () => {
    it('should render the acronym form provided string', () => {
        assert.strictEqual(createAcronym_1('some funny string'), 'SFS')
    });
    it('should render the acronym form provided string with different implementation', () => {
        assert.strictEqual(createAcronym_2('some funny string'), 'SFS')
    });

    it('should return true if string is palindrome', () => {
        assert.equal(checkOnPalindrome('А роза упала на лапу азора'), true)
    });
});
