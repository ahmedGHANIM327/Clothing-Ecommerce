import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button';
import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = ({show,showCartAction}) => {

    const navigate = useNavigate();

    const navigateCheckout = () => {
        navigate('/checkout');
        showCartAction(false);
    }

    const {cartItems,cartTotal} = useContext(CartContext)

    const show_carte = show ? "cart-dropdown-container":"cart-dropdown-container hide_cart"

    return (<div className={show_carte}>
        <span className='close_carte' onClick={() => showCartAction(false)}>X</span>
        <div className='cart-items' >
            {cartItems.length === 0 ? <h1>Your basket is empty</h1>:cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <div className='cart-actions'>
            <span className='cart-total'>Total : {cartTotal}£</span>
            <Button onClick={navigateCheckout}>GO TO CHECKOUT</Button>
        </div>
    </div>);
};

export default CartDropdown;