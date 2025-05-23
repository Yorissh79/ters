import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlistThunk = createAsyncThunk("wishlist/get", async () => {
    const res = await axios.get("http://localhost:5000/wishlist")
    return res.data;
})

export const postWishlistThunk = createAsyncThunk("wishlist/post", async (data) => {
    await axios.post("http://localhost:5000/wishlist", data)
    return data;
})

export const deleteWishlistThunk = createAsyncThunk("wishlist/delete", async (id) => {
    await axios.delete(`http://localhost:5000/wishlist/${id}`)
    return id;
})

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
		wishlist: []
	},
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(getWishlistThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.wishlist = action.payload;
        })

        .addCase(postWishlistThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.wishlist.push(action.payload);
        })

        .addCase(deleteWishlistThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.wishlist = state.wishlist.filter(wishlist => wishlist._id !== action.payload);
        })
    }
})

export default wishlistSlice.reducer;
