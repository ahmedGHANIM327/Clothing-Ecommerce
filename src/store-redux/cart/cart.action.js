import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer";

const addCartItem = (cartItems,productToAdd) => 
{
    console.log(productToAdd)
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

// Add item to cart
export const addItemToCart = (cartItems,product) => {
    const newCartItems = addCartItem(cartItems,product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

// Remove item from cart
export const removeItemFromCart = (cartItems,product) => {
    const newCartItems = removeCartItem(cartItems,product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

// Remove item with all quantity
export const clearItemFromCart = (cartItems,cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};