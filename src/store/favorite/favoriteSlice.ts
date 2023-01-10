import { BasketProduct, Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface FavoriteSlice {
  products: BasketProduct[];
}

const initialState: FavoriteSlice = {
  products: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ADD_TO_FAVORITE: (state, action) => {
      const product = action.payload as Product;
      const basketProduct = state.products.find((p) => p.id === product.id);

      if (basketProduct) {
        basketProduct.quantity++;
      } else {
        state.products.push({
          ...product,
          quantity: 1,
        });
      }
    },
  },
});

export default favoriteSlice.reducer;
export const { ADD_TO_FAVORITE } = favoriteSlice.actions;
