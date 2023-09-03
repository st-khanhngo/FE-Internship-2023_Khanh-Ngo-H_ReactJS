import { CartItem } from './cartItem';

export interface ActionProps {
  type: string;
  payload?: any;
}

export interface CartStateProps {
  cart: CartItem[];
}
