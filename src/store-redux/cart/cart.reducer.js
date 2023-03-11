import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems,productToAdd) => 
{
    console.log('product',productToAdd)
    const existItem = cartItems.find((item) => item.id===productToAdd.id)

    // if cart items contain product we want add
    if(existItem)
    {
        return cartItems.map((item) => item.id === productToAdd.id ? {...item,quantity:item.quantity+1} : item)
    }

    // else
    return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,productToRemove) => 
{
    const existItem = cartItems.find((item) => item.id===productToRemove.id)

    // if quantity === 1
    if(existItem.quantity !== 1)
    {
        return cartItems.map((item) => item.id === productToRemove.id ? {...item,quantity:item.quantity-1} : item)
    }

    // else
    return cartItems.filter((item) => item.id !== existItem.id)
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const CART_INITIAL_STATE = {
    cartItems:[]
};

export const cartSlice = createSlice({
    'name':'cart',
    'initialState' : CART_INITIAL_STATE,
    reducers: {
        //Actions
        addItemToCart(state,action) {
            state.cartItems = addCartItem(state.cartItems,action.payload)
        },
        removeItemFromCart(state,action) {
            state.cartItems = removeCartItem(state.cartItems,action.payload)
        },
        clearItemFromCart(state,action) {
            state.cartItems = clearCartItem(state.cartItems,action.payload)
        }
    }

})

export const cartReducer = cartSlice.reducer

export const { addItemToCart, removeItemFromCart,clearItemFromCart} = cartSlice.actions
