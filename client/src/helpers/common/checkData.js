export const checkData_Include = (data, search) =>
  typeof search === "string" && search.length > 0
    ? data?.toLowerCase().includes(search.toLowerCase())
    : true;

export const checkData_IncludePhone = (phone, search) => {
  const checkSearch = typeof search === "string" && search.length > 0;

  if (!checkSearch) return true;

  const filterSearch = search?.replaceAll(" ", "")?.replaceAll("-", "");
  const filterSpace = phone?.replaceAll(" ", "");
  const filterHyphen = filterSpace?.replaceAll("-", "");
  const filterCountry = filterSpace?.replaceAll("+82", "0");

  const checking = (data) =>
    checkData_Include(data, search) || checkData_Include(data, filterSearch);
  const checkNormal = checking(filterSpace);
  const checkHyphen = checking(filterHyphen);
  const checkCountry = checking(filterCountry);
  const checkTotal = checkNormal || checkHyphen || checkCountry;

  return checkTotal;
};

export const checkData_EveryValid = (array) =>
  array.every((data) => data !== null && data !== undefined);

export const checkData_NullSafety = (data) =>
  data === null || data === undefined;

export const checkData_IsEmpty = (data) =>
  data === null || data === undefined || data === 0 || data === "";
