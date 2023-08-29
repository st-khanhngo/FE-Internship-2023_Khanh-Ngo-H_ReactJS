import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './stylesheets/style.scss';
import Home from './app/pages/home/Home';
import Cart from './app/pages/cart/Cart';
import { useEffect, useState } from 'react';
import {
  StorageKeys,
  getLocalStorage,
  saveToLocalStorage,
} from './app/shared/services/localStorage';
import { routePaths } from './app.routes';
import { ProductItem } from './app/models/product';
import { CartItem } from './app/models/cartItem';
import CartService from './app/shared/services/cartService';
import { Footer, Header } from './app/shared/components/layout';

function App() {
  const [cart, setCart] = useState<CartItem[]>(
    getLocalStorage(StorageKeys.CART)
  );
  const cartService = new CartService();

  useEffect(() => {
    saveToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  const addToCart = (product: ProductItem): void => {
    if (product.status) {
      setCart(cartService.addToCart(cart, product));
    }
  };

  const changeCartQuantity = (id: number, quantity: number): void => {
    if (quantity > 0) {
      setCart(cartService.changeCartQuantity(cart, id, quantity));
    } else {
      deleteCartItem(id);
    }
  };

  const deleteCartItem = (id: number): void => {
    if (window.confirm(`Do you want to delete this item?`)) {
      setCart(cartService.deleteCartItem(cart, id));
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {routePaths.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              (route.element === Home && (
                <>
                  <Header headerType="" cart={cart} />
                  <route.element addToCart={addToCart} />
                </>
              )) ||
              (route.element === Cart && (
                <>
                  <Header headerType="" cart={cart} />
                  <route.element
                    cart={cart}
                    changeCartQuantity={changeCartQuantity}
                    deleteCartItem={deleteCartItem}
                  />
                </>
              ))
            }
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
