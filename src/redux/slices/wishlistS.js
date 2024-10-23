import { createSlice } from "@reduxjs/toolkit";


export const wishlistS = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWishlistitem: (state, action) => {
            state.push(action.payload)
        },
        deleteWishlistitem:(state,action)=>{
            state.filter((item)=>item.id!=action.payload)

        }
    }
})
export const { addWishlistitem,deleteWishlistitem } = wishlistS.actions
export default wishlistS.reducer