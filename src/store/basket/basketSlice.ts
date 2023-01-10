import { createSlice } from "@reduxjs/toolkit";

interface BasketState {}

const initialState: BasketState = {};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export default basketSlice.reducer;
export const {} = basketSlice.actions;
