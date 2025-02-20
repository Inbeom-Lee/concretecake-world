import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

export const sliceLanguage = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = sliceLanguage.actions;

export default sliceLanguage.reducer;
