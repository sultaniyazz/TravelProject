import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packages: [],
  isPackLoad: false,
  isPackError: false,
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    fetchingPackData: (state) => {
      state.isPackLoad = true;
    },
    fetchedPackData: (state, actions) => {
      state.isPackLoad = false;
      state.packages = actions.payload;
    },
    fetchedPackError: (state) => {
      state.isPackLoad = false;
      state.isPackError = true;
    },
  },
});

export const { fetchedPackData, fetchingPackData, fetchedPackError } =
  packagesSlice.actions;
export default packagesSlice.reducer;
