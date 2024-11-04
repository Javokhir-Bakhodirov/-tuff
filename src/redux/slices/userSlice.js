import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    cart: Array.isArray(JSON.parse(localStorage.getItem("cart")))
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    wishlist: Array.isArray(JSON.parse(localStorage.getItem("wishlist")))
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.cart.findIndex(
                product => product.id === action.payload.id
            );
            if (index === -1) {
                state.cart.push({ ...action.payload, quantity: 1 });
            } else {
                state.cart[index].quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex(
                product => product.id === action.payload.id
            );
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity -= 1;
            } else {
                state.cart = state.cart.filter(
                    product => product.id !== action.payload.id
                );
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        clearCart: state => {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        addToWishlist: (state, action) => {
            const exists = state.wishlist.some(
                product => product.id === action.payload.id
            );
            if (!exists) {
                state.wishlist.push(action.payload);
                localStorage.setItem(
                    "wishlist",
                    JSON.stringify(state.wishlist)
                );
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                product => product.id !== action.payload.id
            );
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        clearWishlist: state => {
            state.wishlist = [];
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
} = userSlice.actions;
export default userSlice.reducer;
