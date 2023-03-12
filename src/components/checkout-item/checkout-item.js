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
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          <DoDisturbOnIcon />
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          <AddCircleIcon />
        </div>
      </span>
      <span className='price'> ${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        <DeleteForeverIcon />
      </div>
    </div>
  );
};

export default CheckoutItem;