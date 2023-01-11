import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
