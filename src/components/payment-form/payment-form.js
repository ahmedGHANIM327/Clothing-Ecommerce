import './payment-form.scss'
import { useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

import { useSelector } from 'react-redux'

import { selectCurrentUser } from '../../store-redux/user/user.selector'
import { cartTotalPrice } from '../../store-redux/cart/cart.selector'

import Button from '../button/button'

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(cartTotalPrice);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        // This code need some backend , it's just for test
        /*setIsProcessingPayment(true);
        const response = await fetch('./netlify/functions/create-payment-intent', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => {
          return res.json();
        });
    
        const clientSecret = response.paymentIntent.client_secret;
    
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: currentUser ? currentUser.displayName : 'Guest',
            },
          },
        });
    
        setIsProcessingPayment(false);
    
        if (paymentResult.error) {
          alert(paymentResult.error.message);
        } else {
          if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful!');
          }
        }*/
        alert("Stripe account is desactivated , this is a just test application");
      };

    return (
        <div className='payment_form_container'>
            <form className='payment_form' onSubmit={handlePayment}>
                <CardElement/>
                <Button>Pay Now</Button>
            </form>
        </div>
    )
}

export default PaymentForm;