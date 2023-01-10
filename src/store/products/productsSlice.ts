import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunk";

interface ProductState {
  isLoading: boolean;
  products: Product[];
}

const initialState: ProductState = {
  isLoading: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // filterProducts: (state, action: PayloadAction<string>) => {
    //   const { payload } = action;
    //   state.products = state.products.filter((product) => product.name.toLowerCase().includes(payload.toLowerCase()));
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;
