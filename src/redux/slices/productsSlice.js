import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    related: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setRelated: (state, { payload }) => {
            state.related = [...payload].sort(() => 0.5 - Math.random());
        },
    },
});

export const { setProducts, setRelated } = productsSlice.actions;

export default productsSlice.reducer;
