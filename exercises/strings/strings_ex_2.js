/**
 * Check if string is empty
 *
 * @param {string} inputString
 *
 * @returns {boolean}
 */
export const isEmptyString = (inputString) => {
  return inputString.length === 0 && typeof inputString === "string";
};

/**
 * Truncate string for provided length, trim spaces and put three dots in the end
 *
 * @param {string} input
 *@param {number} length
 *
 * @returns {string}
 */
export const truncate = (input, length) => {
  return `${input.substring(0, length).trim()}...`;
};

/**
 * Fill the start of the string with the `0` if length of the string is less than 10 characters
 *
 * @param {string} inputString
 *
 * @return {string}
 */
export const fillString = (inputString) => {
  return inputString.padStart(10, "0");
};

/**
 * Make provided string PascalCase
 *
 * @param {string} inputString
 *
 * @returns {string}
 */
export const pascalize = (inputString) => {
  //TODO think about special characters
  return inputString
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

/**
 * Make provided string camelCased
 * @param {string} inputString
 *
 *
 * @returns {string}
 */
export const camelize = (inputString) => {
  const strings = inputString.split(" ");

  for (let i = 0; i < strings.length; i++) {
    if (i === 0) {
      strings[i] = strings[i].toLowerCase();
      continue;
    }

    strings[i] =
      strings[i][0].toUpperCase() + strings[i].slice(1).toLowerCase();
  }

  return strings.join("");
};

/**
 * Make provided string snake_case
 * @param {string} inputString
 *
 *
 * @returns {string}
 */
export const snakeCased = (inputString) => {
  return inputString
    .split(" ")
    .map((word) => {
      return word.toLowerCase();
    })
    .join("_");
};

/**
 * Make provided string kebab-case
 *
 * @param {string} inputString
 *
 * @returns {string}
 */
export const kebabCased = (inputString) => {
  return inputString
    .split(" ")
    .map((word) => {
      return word.toLowerCase();
    })
    .join("-");
};

/**
 * Write a function, which wil do the convert of the provided string to the desired format
 *
 * @param {string} inputString
 *
 * @param{('pascal'| 'camel'| 'kebab'| 'snake')} convertTo
 *
 * @return {string}
 */
export const stringConverter = (inputString, convertTo) => {
  if (!convertTo)
    throw new Error(
      "you should specify to what type of string you want to convert"
    );

  let result = inputString
    .replaceAll(/[^A-Za-z0-9\s]/g, "")
    .toLowerCase()
    .split(" ");

  switch (convertTo) {
    case "pascal":
      result = result
        .map((word) => {
          const firstLetter = word.charAt(0).toUpperCase();
          const rest = word.slice(1).toLowerCase();
          return `${firstLetter}${rest}`;
        })
        .join("");
      break;
    case "camel":
      for (let i = 0; i < result.length; i++) {
        if (i === 0) continue;
        result[i] =
          result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();
      }

      result = result.join("");

      break;
    case "kebab":
      result = result.join("-");
      break;
    case "snake":
      result = result.join("_");
      break;
    default:
      throw new Error("converter is out of allowed converters");
  }

  return result;
};

/**
 * create normal phrase form Pascal/camel/snake/kebab cased string
 *
 * @param {string} inputString
 *
 * @param{('pascal'| 'camel'| 'kebab'| 'snake')} convertFrom
 *
 * @return {string}
 */
export const stringConverterReversed = (inputString, convertFrom) => {
  /**
   * @property {string} result
   */
  let result;

  let inputStringList = Array.from(inputString);

  const capitalLetersIterator = inputString.matchAll(/[A-Z]/g);

  if (!convertFrom) throw new Error("specify the type of converter");
  switch (convertFrom) {
    case "pascal":
    case "camel":
      const list = Array.from(capitalLetersIterator);
      for (let match of list) {
        inputStringList[match.index] = ` ${match[0].toLowerCase()}`;
      }
      result = inputStringList.join("").trim();
      break;
    case "kebab":
      result = inputString.replaceAll("-", " ");
      break;
    case "snake":
      result = inputString.replaceAll("_", " ");
      break;
    default:
      throw new Error("convert form is not allwed");
  }

  return result;
};

/**
 *
 * Return the letters form the word/phrase in alphabetical order
 *
 * @param {string} inputString
 *
 * @returns {string}
 */
export const alphabetical = (inputString) => {
  return Array.from(inputString.toLowerCase().split(" ").join(""))
    .toSorted()
    .join("");
};

export const alphabeticalUnique = (inputString) => {
  const stringsSet = new Set(inputString.split(" ").join(""));
  return Array.from(stringsSet).toSorted().join("");
};

/**
 * Calculate and return the most repeated letter in the word/phrase
 *
 * @param {string} inputString
 *
 * @return {Record<string, number>}
 */
export const mostRepeated = (inputString) => {
  const iterable = inputString.toLowerCase().split(" ").join("");
  const sorted = Array.from(iterable).sort();

  const objectOfLettersWithCount = {};

  for (const letter of sorted) {
    if (!(letter in objectOfLettersWithCount)) {
      objectOfLettersWithCount[letter] = 1;
      continue;
    }
    ++objectOfLettersWithCount[letter];
  }

  const ordered = Object.entries(objectOfLettersWithCount).sort(
    ([, a], [, b]) => b - a
  );

  return Object.fromEntries([ordered[0]]);
};
