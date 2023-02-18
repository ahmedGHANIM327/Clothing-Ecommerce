import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-icon.svg'

const CartIcon = ({showCartAction}) => {
    return (
        <div className='cart-icon-container' onClick={() => showCartAction(true)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon