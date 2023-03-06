import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-icon.svg'

import { useSelector } from 'react-redux';
import { cartCount} from '../../store-redux/cart/cart.selector';

const CartIcon = ({showCartAction}) => {

    const cartItemCount = useSelector(cartCount)

    return (
        <div className='cart-icon-container' onClick={() => showCartAction(true)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon