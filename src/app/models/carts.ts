import { Cart } from "./cart";

export default class Carts {
  cart : Cart[];

  constructor(cart: Cart[]) {
    this.cart = cart.map(c => new Cart(c));
  }

  getCartTotalPrice = () => {
    return this.cart.reduce((total, item) => total + item.finalPrice * item.quantity, 0).toFixed(2);
  }

  getCartTotalItem = () => {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
}
