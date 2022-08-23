import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRestaurantScreenParams } from "../../routes/Router";

export interface RestaurantState {
  restaurant: IRestaurantScreenParams;
}

const initialState: RestaurantState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IRestaurantScreenParams>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant: (
  state: any
) => IRestaurantScreenParams | null = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
