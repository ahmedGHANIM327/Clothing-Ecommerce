import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,productToAdd) => 
{
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

export const CartContext = createContext({
    cartItems:[],
    addItemToCart:() => {},
    removeItemFromCart:() => {},
    clearItemFromCart: () => {},
    cartItemCount: 0,
    cartTotal :0
})

export const CartProvider = ({ children }) => {

    const [cartItems,setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {

        // The number of products in our basket
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        
        // Calculate the total price
        const totalPrice = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity*cartItem.price,
            0
        );
        setCartItemCount(count);
        setCartTotal(totalPrice)
      }, [cartItems]);

    // Add item to cart
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product))
    }

    // Remove item from cart
    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems,product))
    }

    // Remove item with all quantity
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {cartItems,addItemToCart,removeItemFromCart,clearItemFromCart,cartItemCount,cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}