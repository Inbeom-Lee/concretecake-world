export const letterSorting = (arr, prop) => {
  const sorting = arr?.sort((a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  });
  return sorting;
};

export const doubleSorting = (arr, prop1, prop2) => {
  const sorted = arr?.sort((a, b) => {
    if (a[prop1] === b[prop1]) {
      if (a[prop2] === b[prop2]) {
        return 0;
      }
      return a[prop2] < b[prop2] ? -1 : 1;
    } else {
      return a[prop1] < b[prop1] ? -1 : 1;
    }
  });
  return sorted;
};

export const timelogSorting = (arr) =>
  arr.sort((a, b) => new Date(b.timelog[0].time) - new Date(a.timelog[0].time));

export const timeSorting = (arr) =>
  arr.sort((a, b) => new Date(b.time) - new Date(a.time));

export const timeSorter = (arr, time) =>
  arr?.sort((a, b) => (a && b ? new Date(a[time]) - new Date(b[time]) : 0));
export const timeSorter2 = (arr, time) =>
  arr?.sort((a, b) => (a && b ? new Date(b[time]) - new Date(a[time]) : 0));

export const fabricListSorter = (arr, list) => {
  const sort2 = arr.sort((a, b) => {
    const checkA = a.uidTrader && list[a.uidTrader];
    const checkB = b.uidTrader && list[b.uidTrader];

    if (checkA && checkB) {
      if (checkA.name === checkB.name) {
        if (a.name === b.name) {
          return 0;
        }
        return a.name < b.name ? -1 : 1;
      } else {
        return checkA.name < checkB.name ? -1 : 1;
      }
    } else if (checkA || checkB) {
      return checkA ? -1 : 1;
    } else {
      if (a.trader === b.trader) {
        if (a.name === b.name) {
          return 0;
        }
        return a.name < b.name ? -1 : 1;
      } else {
        return a.trader < b.trader ? -1 : 1;
      }
    }
  });
  return sort2;
};

export const sorter_PropLength = (arr, prop) =>
  arr.sort((a, b) => {
    const findPropA = (a[prop] && Object.values(a[prop])) || [];
    const findPropB = (b[prop] && Object.values(b[prop])) || [];

    return findPropA?.length < findPropB?.length ? 1 : -1;
  });
