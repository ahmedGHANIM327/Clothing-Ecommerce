import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-icon.svg'

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = ({showCartAction}) => {

    const {cartItemCount} = useContext(CartContext)

    return (
        <div className='cart-icon-container' onClick={() => showCartAction(true)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon