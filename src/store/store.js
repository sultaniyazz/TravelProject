import { configureStore } from "@reduxjs/toolkit";
import destinationsSlice from "../features/destinations/destinationsSlice";
import packagesSlice from "../features/packages/packagesSlice";
import pageSlice from "../features/pageActionSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    destinationsSlice,
    packagesSlice,
    pageSlice,
    userSlice,
  },
});
