/**
 * Creates a URL for the given Blob or File object.
 * @param {Blob|File} blob - The Blob or File object for which to create the URL.
 * @returns {string|null} The URL for the Blob/File, or null if the input is not a Blob/File.
 */
export const URL_getURL = (blob) => {
  if (blob instanceof Blob) return URL.createObjectURL(blob);

  return null;
};
