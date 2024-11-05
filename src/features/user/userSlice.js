import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isUserLoad: false,
  isUserError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchingUserData: (state) => {
      state.isUserLoad = true;
    },
    fetchedUserData: (state, actions) => {
      state.isUserLoad = false;
      state.user = actions.payload;
    },
    fetchedUserError: (state) => {
      state.isUserLoad = false;
      state.isUserError = true;
    },
  },
});

export const { fetchedUserData, fetchingUserData, fetchedUserError } =
  userSlice.actions;
export default userSlice.reducer;
