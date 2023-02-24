import './product-card.scss';

import { useContext } from 'react';

import Button from '../button/button';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl ,category} = product;

  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)
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