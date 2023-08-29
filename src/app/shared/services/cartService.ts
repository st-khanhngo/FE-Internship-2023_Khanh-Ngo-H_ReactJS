import { CartItem } from '../../models/cartItem';
import { ProductItem } from '../../models/product';

export default class CartService {
  getCartTotalPrice = (cart: CartItem[]): string => {
    return cart
      .reduce((total, item) => total + item.finalPrice * item.quantity, 0)
      .toFixed(2);
  };

  getCartTotalItem = (cart: CartItem[]): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  addToCart = (cart: CartItem[], product: ProductItem): CartItem[] => {
    const cartExisted = cart.find((item: CartItem) => item.id === product.id);
    if (!cartExisted) {
      const newItem = new CartItem({ ...product, quantity: 1 });
      return [...cart, newItem];
    } else {
      return cart.map((item: CartItem) =>
        item.id === cartExisted.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  };

  changeCartQuantity = (
    cart: CartItem[],
    id: number,
    quantity: number
  ): CartItem[] => {
    return cart.map((item: CartItem) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
  };

  deleteCartItem = (cart: CartItem[], id: number): CartItem[] => {
    return cart.filter((item: CartItem) => item.id !== id);
  };
}
