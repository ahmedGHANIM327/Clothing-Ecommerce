import './product-card.scss';

import Button from '../button/button';

import { addItemToCart } from '../../store-redux/cart/cart.action';
import { selectCartItems } from '../../store-redux/cart/cart.selector';
import { useSelector,useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl ,category} = product;

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems,product))
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <span className='category'>{category.toUpperCase()}</span>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard;