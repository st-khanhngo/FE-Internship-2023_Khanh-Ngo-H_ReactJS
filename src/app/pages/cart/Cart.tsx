import { Link } from 'react-router-dom';
import { CartProps } from '../../models/cart';
import { CartItem } from './components/CartItem';

interface CartPageProps {
  cart: CartProps[];
  changeCartQuantity: Function;
  deleteCartItem: Function;
}

const Cart = ({ cart, changeCartQuantity, deleteCartItem }: CartPageProps) => {
  return (
    <>
      <div className='cart-page'>
        <section className='section section-cart'>
          <div className='container'>
            <ul className='cart-list'>
              {cart.length === 0 && (
                <div className='section section-cart cart-empty'>
                  <h3 className='section-header'>CART IS EMPTY</h3>
                  <Link
                    to='/'
                    className='btn btn-primary'
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
              {cart.map((item: CartProps) => {
                return (
                  <CartItem
                    key={item.id}
                    cart={item}
                    changeCartQuantity={changeCartQuantity}
                    deleteCartItem={deleteCartItem}
                  />
                );
              })}
            </ul>
            <p className='cart-total'>
              {/* TOTAL CART PRICE: ${cartList.cartTotalPrice()} */}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
