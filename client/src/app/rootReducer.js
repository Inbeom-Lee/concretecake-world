import { combineReducers } from "@reduxjs/toolkit";
import sliceUser from "Features/sliceUser";
import sliceDevice from "Features/sliceDevice";
import sliceLanguage from "Features/sliceLanguage";
import sliceTravel from "Features/sliceTravel";

const rootReducer = combineReducers({
  user: sliceUser,
  device: sliceDevice,
  language: sliceLanguage,
  travel: sliceTravel,
});

export default rootReducer;
