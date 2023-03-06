import {createSelector} from 'reselect'

const selectCartReducer = state => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const cartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,0)
)



export const cartTotalPrice = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity*cartItem.price,
        0
    )
)

