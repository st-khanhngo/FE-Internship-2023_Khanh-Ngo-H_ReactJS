import { ProductItem } from '../../models/product';
import { ActionProps } from '../../models/redux';
import { ADD_CART, DELETE_CART, UPDATE_CART } from '../type';

export const addCart = (product: ProductItem): ActionProps => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const updateCart = (id: number, quantity: number): ActionProps => {
  return {
    type: UPDATE_CART,
    payload: { id, quantity },
  };
};

export const deleteCart = (id: number): ActionProps => {
  return {
    type: DELETE_CART,
    payload: id,
  };
};
