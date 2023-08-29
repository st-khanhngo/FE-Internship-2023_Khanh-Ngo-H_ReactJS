import { Link } from 'react-router-dom';
import { CartItem } from '../../models/cartItem';
import { ProductCart } from './components';
import CartService from '../../shared/services/cartService';

interface CartPageProps {
  cart: CartItem[];
  changeCartQuantity: (id: number, quantity: number) => void;
  deleteCartItem: (id: number) => void;
}

const Cart = ({ cart, changeCartQuantity, deleteCartItem }: CartPageProps) => {
  const cartService = new CartService();
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
              <>
                <ul className="cart-list">
                  {cart.map((item) => {
                    return (
                      <ProductCart
                        key={item.id}
                        cart={item}
                        changeCartQuantity={changeCartQuantity}
                        deleteCartItem={deleteCartItem}
                      />
                    );
                  })}
                </ul>
                <p className="cart-total">
                  TOTAL CART PRICE: ${cartService.getCartTotalPrice(cart)}
                </p>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
