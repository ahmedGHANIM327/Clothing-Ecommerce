import React from 'react';

import Button from '../button/button';

import './cart-dropdown.scss';

const CartDropdown = ({show,showCartAction}) => {

    const show_carte = show ? "cart-dropdown-container":"cart-dropdown-container hide_cart"

    return (<div className={show_carte}>
        <span className='close_carte' onClick={() => showCartAction(false)}>X</span>
        <div className='cart-items' />
        <Button>GO TO CHECKOUT</Button>
    </div>);
};

export default CartDropdown;