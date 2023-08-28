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
import { Footer, Header } from './app/shared/components';
import { routePaths } from './app.routes';
import { ProductProps } from './app/models/product';
import { CartProps } from './app/models/cart';

function App() {
  const [cart, setCart] = useState(getLocalStorage(StorageKeys.CART));

  useEffect(() => {
    saveToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  const addToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: ProductProps
  ): void => {
    e.preventDefault();
    const cartExisted = cart.find((item: CartProps) => item.id === product.id);
    if (!cartExisted) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item: CartProps) =>
          item.id === cartExisted.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const changeCartQuantity = (id: number, quantity: number): void => {
    if (quantity > 0) {
      setCart(
        cart.map((item: CartProps) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    } else {
      deleteCartItem(id);
    }
  };

  const deleteCartItem = (id: number): void => {
    if (window.confirm(`Do you want to delete this item?`)) {
      setCart(cart.filter((item: CartProps) => item.id !== id));
    }
  };

  return (
    <BrowserRouter>
      <Header
        headerType={''}
        carts={cart}
      />
      <Routes>
        {routePaths.map(
          (route) =>
            (route.element === Home && (
              <Route
                key={route.id}
                path={route.path}
                element={<route.element addToCart={addToCart} />}
              />
            )) ||
            (route.element === Cart && (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <route.element
                    cart={cart}
                    changeCartQuantity={changeCartQuantity}
                    deleteCartItem={deleteCartItem}
                  />
                }
              />
            ))
        )}

        {/* {routePaths.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.element addToCart={addToCart} />}
          />
        ))} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
