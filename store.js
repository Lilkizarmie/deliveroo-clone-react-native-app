import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./store/slices/basketSlices";
import restaurantReducer from "./store/slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
