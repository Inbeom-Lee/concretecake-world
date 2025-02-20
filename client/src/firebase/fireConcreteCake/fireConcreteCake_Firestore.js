import { getFirestore } from "firebase/firestore";
import { firebaseConcreteCake } from "../initializeFirebase";
import {
  templateReadDocFS,
  templateReadColFS,
  templateWriteFS,
  templateUpdateFS,
  templateDeleteFS,
} from "../fireTemplate";

export const concreteCakeFS = getFirestore(firebaseConcreteCake);

export const readDocConcreteCakeFS = async (refDoc) =>
  await templateReadDocFS(concreteCakeFS, refDoc);

export const readColConcreteCakeFS = async (refDoc) =>
  await templateReadColFS(concreteCakeFS, refDoc);

export const writeConcreteCakeFS = async (data, refDoc) =>
  await templateWriteFS(concreteCakeFS, data, refDoc);

export const updateConcreteCakeFS = async (data, refDoc) =>
  await templateUpdateFS(concreteCakeFS, data, refDoc);

export const deleteConcreteCakeFS = async (refDoc) =>
  await templateDeleteFS(concreteCakeFS, refDoc);
