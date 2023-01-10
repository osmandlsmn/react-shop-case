import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunk";

interface ProductState {
  isLoading: boolean;
  products: Product[];
  filteredProducts: Product[];
}

const initialState: ProductState = {
  isLoading: false,
  products: [],
  filteredProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.filteredProducts = state.products.filter((product) => product.title.toLowerCase().includes(payload.toLowerCase()));
    },
    filterByPrice: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      if (payload === "lowToHigh") {
        state.filteredProducts = state.products.sort((a, b) => a.price - b.price);
      } else if (payload === "highToLow") {
        state.filteredProducts = state.products.sort((a, b) => b.price - a.price);
      }
    },
    filterByImportance: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      if (payload === "lowToHigh") {
        state.filteredProducts = state.products.sort((a, b) => a.rating - b.rating);
      } else if (payload === "highToLow") {
        state.filteredProducts = state.products.sort((a, b) => b.rating - a.rating);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
    });
  },
});

export default productSlice.reducer;
export const { filterByName, filterByPrice, filterByImportance } = productSlice.actions;
