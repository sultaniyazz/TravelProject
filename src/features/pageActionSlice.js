import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookModal: false,
  sideBar: false,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    showSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
    showBookModal: (state) => {
      state.bookModal = !state.bookModal;
    },
  },
});

export const { showSideBar, showBookModal } = pageSlice.actions;
export default pageSlice.reducer;
