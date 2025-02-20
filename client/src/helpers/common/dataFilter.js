export const dataFilter_FileSize = (size) =>
  size > 1000000
    ? `${Math.round((size / 1000000) * 10) / 10}mb`
    : size > 1000
    ? `${Math.round(size / 1000)}kb`
    : `${size}bytes`;

export const dataFilter_File = (file, uidFile, fileName) => {
  const { size, name, type, lastModifiedDate, lastModified } = file;

  const filterSize =
    size > 1000000
      ? `${Math.round((size / 1000000) * 10) / 10}mb`
      : size > 1000
      ? `${Math.round(size / 1000)}kb`
      : `${size}bytes`;

  const newFile = {
    uid: uidFile,
    name: fileName || name || null,
    type,
    lastModifiedDate: lastModifiedDate || lastModified || null,
    timeUploaded: new Date().getTime(),
    size: filterSize,
  };

  return newFile;
};

export const dataFilter_UidList = (uidList) => {
  const arrayData = uidList && Object.keys(uidList);
  const filterData = arrayData?.filter((uidData) => uidList[uidData]);
  return filterData;
};

export const dataFilter_InputNumber = (value, alwaysPositive) => {
  let filterValue = value.replace(/[^0-9.-]/g, "");
  let index = filterValue.indexOf(".");
  if (index >= 0) {
    filterValue =
      filterValue.substr(0, index + 1) +
      filterValue.substr(index + 1).replace(/\./g, "");
  }

  const checkMinus =
    filterValue.split("").filter((letter) => letter === "-")?.length === 1;
  const filterMinus = filterValue.replaceAll("-", "");
  const putMinus = alwaysPositive
    ? filterMinus
    : checkMinus
    ? `-${filterMinus}`
    : filterMinus;
  const splitDot = filterValue.split(".");
  const checkDot =
    filterValue.includes(".") &&
    (!splitDot[1] || splitDot[1].split("").every((num) => num === "0"));
  const valueFinal =
    filterValue === ""
      ? ""
      : checkDot
      ? putMinus
      : Number(putMinus.replaceAll(",", ""));
  const checkNaN =
    filterValue === "-" ? "-" : isNaN(valueFinal) ? "" : valueFinal;

  return checkNaN;
};

export const dataFilter_newDateString = (date) => {
  const checkNumber = (number) => String(number).padStart(2, "0");
  const Year = date.getFullYear();
  const Month = checkNumber(date.getMonth() + 1);
  const Date = checkNumber(date.getDate());
  const Hours = checkNumber(date.getHours());
  const Minutes = checkNumber(date.getMinutes());
  const newDateString = `${Year}-${Month}-${Date}T${Hours}:${Minutes}:00`;

  return newDateString;
};
