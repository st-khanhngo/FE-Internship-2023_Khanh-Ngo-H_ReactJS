import { ActionProps, ProductState } from '../../models/redux';
import { GET_PRODUCTS } from '../type';

const initialProducts: ProductState = {
  products: [],
};

export const productReducer = (
  state = initialProducts,
  action: ActionProps
): ProductState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
