import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            state.categories = payload;
        },
    },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
