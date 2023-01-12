import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface FavoriteSlice {
  products: Product[];
}

const initialState: FavoriteSlice = {
  products: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ADD_TO_FAVORITE: (state, action) => {
      const product = action.payload;
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index === -1) {
        state.products.push(product);
      } else {
        state.products.splice(index, 1);
      }
    },
    REMOVE_FROM_FAVORITE: (state, action) => {
      const product = action.payload;
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export default favoriteSlice.reducer;
export const { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } = favoriteSlice.actions;
