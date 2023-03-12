import './checkout.scss'

import PageTitle from '../../components/page-title/page-title'

import ProductsScroll from "../../components/product__scroll/products_scroll";

import CheckoutItem from '../../components/checkout-item/checkout-item';

import { useSelector } from 'react-redux';
import { selectCartItems ,cartTotalPrice} from '../../store-redux/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(cartTotalPrice)

  return (
    <div className='checkout_full_container'>
      <PageTitle page_title={"Checkout"}/>
      <div className="section-container checkout-container">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${cartTotal}</div>
      </div>
      <PaymentForm />
      <ProductsScroll />
    </div>
  );
};

export default Checkout;