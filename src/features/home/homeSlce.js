import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
