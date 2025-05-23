import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice.js";
import basketSlice from "./reducers/basketSlice.js";
import wishlistSlice from "./reducers/wishlistSlice.js";

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        basket: basketSlice,
        wishlist: wishlistSlice
    },
})