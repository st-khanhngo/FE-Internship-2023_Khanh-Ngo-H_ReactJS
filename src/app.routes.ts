import Cart from "./app/pages/cart/Cart";
import Home from "./app/pages/home/Home";

export const routePaths = [
  {
    id: 1,
    path: '/',
    element: Home
  },
  {
    id: 2,
    path: '/cart',
    element: Cart
  },
];
