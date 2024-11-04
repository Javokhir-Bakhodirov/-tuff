import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/categorySlice";
import productsReducer from "../slices/productsSlice";
import { api } from "../api/index";
import userReducer from "../slices/userSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoryReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware),
});
