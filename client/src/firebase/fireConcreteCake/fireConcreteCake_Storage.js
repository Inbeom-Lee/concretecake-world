import {
  getStorage,
  ref,
  getBlob,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { firebaseConcreteCake } from "../initializeFirebase";

export const concreateCakeStorage = getStorage(firebaseConcreteCake);

export const readConcreateCakeStorageBlob = async (refArray) => {
  try {
    const refPath = refArray
      .map((ref, i) => (i === 0 ? ref : `/${ref}`))
      .join("");

    const file = await getBlob(ref(concreateCakeStorage, refPath));

    return file;
  } catch (err) {
    throw err;
  }
};
export const writeConcreateCakeStorage = async (file, refArray) => {
  const refPath = refArray
    .map((ref, i) => (i === 0 ? ref : `/${ref}`))
    .join("");
  uploadBytes(ref(concreateCakeStorage, refPath), file);
};
export const deleteConcreateCakeStorage = async (refArray) => {
  const refPath = refArray
    .map((ref, i) => (i === 0 ? ref : `/${ref}`))
    .join("");
  deleteObject(ref(concreateCakeStorage, refPath));
};
