import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAppleDevice: false,
  isAndroid: false,
};

export const sliceDevice = createSlice({
  name: "device",
  initialState: initialState,
  reducers: {
    setAppleDevice: (state) => {
      state.isAppleDevice = true;
      state.isAndroid = false;
    },
    setAndroidDevice: (state) => {
      state.isAndroid = true;
      state.isAppleDevice = false;
    },
  },
});

export const { setAppleDevice, setAndroidDevice } = sliceDevice.actions;

export default sliceDevice.reducer;
