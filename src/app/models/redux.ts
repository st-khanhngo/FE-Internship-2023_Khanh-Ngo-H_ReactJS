import { CartItem } from './cartItem';
import { ProductItem } from './product';

export interface ActionProps {
  type: string;
  payload?: any;
}

export interface CartState {
  cart: CartItem[];
}

export interface ProductState {
  products: ProductItem[];
}
