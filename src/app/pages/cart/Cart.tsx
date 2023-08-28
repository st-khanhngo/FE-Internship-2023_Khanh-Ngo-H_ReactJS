import { CartItem } from '../../shared/components';
import { CartProps } from '../../models/cart';

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
