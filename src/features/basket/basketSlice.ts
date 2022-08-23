import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ISanityImage from "../../models/ISanityImage";

export interface BasketItem {
  id: string;
  image: ISanityImage;
  name: string;
  description: string;
  price: number;
}

export interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<BasketItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems: (state: any) => BasketItem[] = (state) =>
  state.basket.items;
export const selectBasketItemsById: (state: any, id: string) => BasketItem[] = (
  state,
  id
) => state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal: (state: any) => number = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
