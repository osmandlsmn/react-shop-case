import { BasketProduct, Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface BasketState {
  products: BasketProduct[];
}

const initialState: BasketState = {
  products: [],
};

const basketSlice = createSlice({
  name: "cart",
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
    REMOVE_FROM_CART: (state, action) => {
      const { id } = action.payload as BasketProduct;
      const index = state.products.findIndex((p) => p.id === id);

      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
    QUANİTY_CHANGE: (state, action) => {
      const { product, quantity } = action.payload as { product: BasketProduct; quantity: number };
      const basketProduct = state.products.find((p) => p.id === product.id);

      if (basketProduct) {
        basketProduct.quantity += basketProduct.quantity = quantity;
      }
    },
  },
});

export default basketSlice.reducer;
export const { ADD_TO_CART, QUANİTY_CHANGE, REMOVE_FROM_CART } = basketSlice.actions;
