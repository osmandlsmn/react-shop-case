import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import productsReducer from "./products/productsSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import cartReducer from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  debug: true,
  blacklist: ["products"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);
