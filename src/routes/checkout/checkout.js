import './checkout.scss'
import { Grid } from '@mui/material'

import PageTitle from '../../components/page-title/page-title'

import ProductsScroll from "../../components/product__scroll/products_scroll";

import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import Button from '../../components/button/button';

import { useSelector } from 'react-redux';
import { selectCartItems ,cartTotalPrice} from '../../store-redux/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(cartTotalPrice)

  let navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/shop")
        window.scrollTo(0, 0)
    }

  return (
    <div className='checkout_full_container'>
      <PageTitle page_title={"Checkout"}/>
      {cartItems.length === 0 ? 
        <div className="section-container empty_card">
          <h1>Your Cart is empty</h1>
          <Button onClick={handleNavigation} buttonType={'blue_button'}>Back To Shop</Button>
        </div> :
        <Grid container className='section-container' rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid item md={8} sm={12} xs={12} className='left_checkout'>
              <div className='checkout_header'>
                <h2>Your Cart</h2>
                <span>{cartItems && cartItems.length} cart items</span>
              </div>
              <div className="checkout-container">
                {cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                
              </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className='right_checkout'>
              <div className='total_info'>
                <span>Sub-total</span>
                <span>${cartTotal}</span> 
              </div>
              <div className='total_info'>
                <span>Shipping</span>
                <span>$0</span> 
              </div>
              <div className='total_info'>
                <span>Total</span>
                <span>${cartTotal}</span> 
              </div>
              <PaymentForm />
          </Grid>    
        </Grid>
      }
      
      <ProductsScroll />
    </div>
  );
};

export default Checkout;