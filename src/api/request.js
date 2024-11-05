import axios from "axios";
import {
  fetchedDestData,
  fetchedDestError,
  fetchingDestData,
} from "../features/destinations/destinationsSlice";
import {
  fetchedPackData,
  fetchedPackError,
  fetchingPackData,
} from "../features/packages/packagesSlice";
import {
  fetchedUserData,
  fetchedUserError,
  fetchingUserData,
} from "../features/user/userSlice";

export const getAlldestData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingDestData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedDestData(res.data));
    } catch (err) {
      dispatch(fetchedDestError(err.message));
    }
  };
};
export const getAllPackData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingPackData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedPackData(res.data));
    } catch (err) {
      dispatch(fetchedPackError(err.message));
    }
  };
};
export const getAllUserData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingUserData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedUserData(res.data));
    } catch (err) {
      dispatch(fetchedUserError(err.message));
    }
  };
};

// const deleteDataById = async (id) => {
//   try {
//     // API endpointini kiritish
//     const response = await axios.delete(
//       `https://travel-data-base.onrender.com/users/${id}`
//     ); // id orqali o'chirish
//     console.log(`Ma'lumot o'chirildi:`, response.data);
//   } catch (error) {
//     console.error("Ma'lumotni o'chirishda xato:", error);
//   }
// };

// // Misol uchun, ma'lum bir id bilan funksiyani chaqirish
// const itemId = 2; // O'chirilishi kerak bo'lgan ID
// deleteDataById(itemId);
