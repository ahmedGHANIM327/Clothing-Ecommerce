import { addItemToCart,clearItemFromCart,removeItemFromCart } from '../../store-redux/cart/cart.reducer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

import { useDispatch } from 'react-redux';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <>
      <div className="chekout_item_container">
        <div className="checkout_left">
          <div className='checkout_image'>
            <img src={imageUrl} alt={`${name}`} />
          </div>
          <div className="checkout_infos">
            <h3 className='name'> {name} </h3>
            <span className='price'> ${price}</span>
          </div>
        </div>
        <div className="checkout_right">
          <div className='arrow' onClick={removeItemHandler}>
            <DoDisturbOnIcon />
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemHandler}>
            <AddCircleIcon />
          </div>
          <div className='remove-button' onClick={clearItemHandler}>
            <DeleteForeverIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;