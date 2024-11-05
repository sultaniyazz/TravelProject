import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
  isDestLoad: false,
  isDestError: false,
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    fetchingDestData: (state) => {
      state.isDestLoad = true;
    },
    fetchedDestData: (state, actions) => {
      state.isDestLoad = false;
      state.destinations = actions.payload;
    },
    fetchedDestError: (state) => {
      state.isDestLoad = false;
      state.isDestError = true;
    },
  },
});

export const { fetchedDestData, fetchedDestError, fetchingDestData } =
  destinationsSlice.actions;
export default destinationsSlice.reducer;
