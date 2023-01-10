import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productsSlice";
import basketReducer from "./basket/basketSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
