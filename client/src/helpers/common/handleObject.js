/**
 * Retrieves the values from an object. Returns null if the input is not an object.
 * @param {object} obj - The object from which to extract the values.
 * @returns {Array|null} An array of values from the object or null if the input is not an object.
 */
export const obj_Values = (obj) => {
  const checkType = typeof obj === "object";
  const checkIfArray = !Array.isArray(obj);
  const checkTotal = obj && checkType && checkIfArray;

  if (checkTotal) return Object.values(obj);
  if (!checkTotal) return null;
};

/**
 * Retrieves the keys from an object. Returns null if the input is not an object.
 * @param {object} obj - The object from which to extract the keys.
 * @returns {Array|null} An array of keys from the object or null if the input is not an object.
 */
export const obj_Keys = (obj) => {
  const checkType = typeof obj === "object";
  const checkIfArray = !Array.isArray(obj);
  const checkTotal = obj && checkType && checkIfArray;

  if (checkTotal) return Object.keys(obj);
  if (!checkTotal) return null;
};
