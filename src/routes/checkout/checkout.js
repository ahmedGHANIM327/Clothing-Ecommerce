import './checkout.scss'
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import PageTitle from '../../components/page-title/page-title'

import ProductsScroll from "../../components/product__scroll/products_scroll";

import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout_full_container'>
      <PageTitle page_title={"Checkout"}/>
      <div className="section-container checkout-container">
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${cartTotal}</div>
      </div>
      <ProductsScroll />
    </div>
  );
};

export default Checkout;