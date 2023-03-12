import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Stripe
import {Elements} from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe';

// Redux
import { Provider } from 'react-redux';
import { store } from './store-redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
  </Provider>
);

