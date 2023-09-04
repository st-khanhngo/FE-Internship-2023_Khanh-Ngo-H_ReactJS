import { Dispatch } from 'redux';
import { GET_PRODUCTS } from '../type';
import { ActionProps } from '../../models/redux';

export const getProducts = () => async (dispatch: Dispatch<ActionProps>) => {
  try {
    return (await fetch('/products.json')).json().then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res });
    });
  } catch (error) {
    console.log(error);
  }
};
