import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: null,
  itemsCollected: {
    pine: 0,
    berry: 0,
    honey: 0,
  },
};

export const sliceTravel = createSlice({
  name: "travel",
  initialState,
  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    setItemsCollected: (state, action) => {
      state.itemsCollected = { ...state.itemsCollected, ...action.payload };
    },
  },
});

export const { setStage, setItemsCollected } = sliceTravel.actions;

export default sliceTravel.reducer;
