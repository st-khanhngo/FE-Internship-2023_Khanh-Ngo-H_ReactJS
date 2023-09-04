import { Link } from 'react-router-dom';
import { ProductCart } from '../components';
import CartService from '../../../shared/services/cartService';
import { useSelector } from 'react-redux';
import { ReactElement, useEffect } from 'react';
import {
  StorageKeys,
  saveToLocalStorage,
} from '../../../shared/services/localStorage';
import { StateProps } from '../../../redux/store';

const Cart = (): ReactElement => {
  const cart = useSelector((state: StateProps) => state.cart.cart);
  console.log(cart);

  const cartService = new CartService();
  useEffect(() => {
    saveToLocalStorage(StorageKeys.CART, cart);
  }, [cart]);

  return (
    <>
      <div className="cart-page">
        <section className="section section-cart">
          <div className="container">
            {cart.length === 0 ? (
              <div className="section section-cart cart-empty">
                <h3 className="section-header">CART IS EMPTY</h3>
                <Link to="/" className="btn btn-primary">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="cart-wrapper row">
                <ul className="cart-list col col-9">
                  {cart.map((item) => {
                    return <ProductCart key={item.id} cartItem={item} />;
                  })}
                </ul>
                <div className="total-wrapper col col-2">
                  <span className="total-title">TOTAL CART PRICE:</span>
                  <span className="total-price">
                    ${cartService.getCartTotalPrice(cart)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
