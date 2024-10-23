import { createSlice } from "@reduxjs/toolkit";

export const cartS = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        additemtoCart: (state, action) => {
            state.push(action.payload)

        },
        deleteitemfromcart: (state, action) => {
            return state.filter((item) => item.id != action.payload)

        },
        emptyCart:(state)=>{
            return state=[]
        }

    }
})
export const { additemtoCart, deleteitemfromcart,emptyCart } = cartS.actions

export default cartS.reducer