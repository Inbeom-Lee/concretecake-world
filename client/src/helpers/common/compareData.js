import isEqual from "lodash.isequal";

export const compareData_Object = (prevObject, newObject) =>
  isEqual(prevObject, newObject) ? prevObject : newObject;

// newObject
//   ? prevObject
//     ? Object.keys(newObject).reduce((accumulater, key) => {
//         const getPrev = prevObject?.[key];
//         const getNew = newObject?.[key];
//         const comparing = isEqual(getPrev, getNew);
//         return { ...accumulater, [key]: comparing ? getPrev : getNew };
//       }, {})
//     : newObject
//   : undefined;
