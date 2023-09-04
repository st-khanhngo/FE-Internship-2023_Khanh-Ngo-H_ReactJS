import { ActionProps, CartState } from '../../models/redux';
import { ADD_CART, DELETE_CART, UPDATE_CART } from '../type';

import { CartItem } from '../../models/cartItem';
import {
  StorageKeys,
  getLocalStorage,
} from '../../shared/services/localStorage';

const initialCart: CartState = {
  cart: getLocalStorage(StorageKeys.CART),
};

export const cartReducer = (
  state = initialCart,
  action: ActionProps
): CartState => {
  switch (action.type) {
    case ADD_CART:
      const cartExisted = state.cart.find(
        (item: CartItem) => item.id === action.payload.id
      );
      if (!cartExisted) {
        const newItem = new CartItem({ ...action.payload, quantity: 1 });
        return {
          ...state,
          cart: [newItem, ...state.cart],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item: CartItem) =>
            item.id === cartExisted.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((item: CartItem) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item: CartItem) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
