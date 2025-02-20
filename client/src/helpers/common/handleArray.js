/**
 * Removes duplicates and falsy values from an array.
 * @param {Array} array - The array to process.
 * @returns {Array} The processed array with duplicates and falsy values removed.
 */
export const array_RemoveDuplicates = (array) => {
  if (!Array.isArray(array)) return null;

  let result = [];
  let seen = new Set();

  for (const item of array) {
    if (item && !seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
};

export const array_Concat = (array) => {
  const checkArray = array.every((data) => Array.isArray(data));

  if (!checkArray) return null;

  const concatArray = array.reduce((acc, item) => {
    if (item === undefined || (Array.isArray(item) && item.length === 0)) {
      return acc;
    }

    return acc.concat(item.filter((element) => element !== undefined));
  }, []);

  const filterArray = concatArray.filter(Boolean);

  return filterArray;
};
