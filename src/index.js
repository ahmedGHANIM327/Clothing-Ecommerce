import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user';
import { CategoriesProvider } from './context/categories.context';
import { ProductsProvider } from './context/products.context';
import { CartProvider } from './context/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
);

