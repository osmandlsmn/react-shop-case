import { Address, BasketProduct, Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface BasketState {
  products: BasketProduct[];
  addresses: Address[];
  selectedAdress: Address | null;
}

const initialState: BasketState = {
  products: [],
  addresses: [],
  selectedAdress: null,
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
    ADD_ADDRESS: (state, action) => {
      const address = action.payload as Address;
      state.addresses.push({
        ...address,
        id: state.addresses.length + 1,
      });
    },
    REMOVE_ADDRESS: (state, action) => {
      const { id } = action.payload as Address;
      const index = state.addresses.findIndex((a) => a.id === id);

      if (index !== -1) {
        state.addresses.splice(index, 1);
      }
    },
    SELECT_ADDRESS: (state, action) => {
      const address = action.payload as Address;
      state.selectedAdress = address;
    },
  },
});

export default basketSlice.reducer;
export const { ADD_TO_CART, QUANİTY_CHANGE, REMOVE_FROM_CART, ADD_ADDRESS, REMOVE_ADDRESS, SELECT_ADDRESS } = basketSlice.actions;
