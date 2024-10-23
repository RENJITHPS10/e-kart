import { configureStore } from '@reduxjs/toolkit'
import   wishlistS  from './slices/wishlistS'
import  cartS  from './slices/cartS'

export const store=configureStore({
    reducer:{
        wishlist:wishlistS,
        cartItem:cartS


    }
    
}
)
export default store