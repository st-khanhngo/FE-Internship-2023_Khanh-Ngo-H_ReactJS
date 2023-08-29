import { Link } from "react-router-dom";
import { CartProps } from "../../models/cartItem";
import { ProductCart } from "./components/ProductCart";
import CartList from "../../models/cartList";

interface CartPageProps {
  cartList: CartList;
  changeCartQuantity: (id: number, quantity: number) => void;
  deleteCartItem: (id: number) => void;
}

const Cart = ({
  cartList,
  changeCartQuantity,
  deleteCartItem,
}: CartPageProps) => {
  return (
    <>
      <div className='cart-page'>
        <section className='section section-cart'>
          <div className='container'>
            <ul className='cart-list'>
              {cartList.cart.map((item: CartProps) => {
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
            {cartList.cart.length === 0 ? (
              <div className='section section-cart cart-empty'>
                <h3 className='section-header'>CART IS EMPTY</h3>
                <Link
                  to='/'
                  className='btn btn-primary'
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <p className='cart-total'>
                TOTAL CART PRICE: ${cartList.getCartTotalPrice()}
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
