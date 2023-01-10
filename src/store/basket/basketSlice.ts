import { BasketProduct, Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface BasketState {
  products: BasketProduct[];
}

const initialState: BasketState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
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

export default basketSlice.reducer;
export const { ADD_TO_CART } = basketSlice.actions;