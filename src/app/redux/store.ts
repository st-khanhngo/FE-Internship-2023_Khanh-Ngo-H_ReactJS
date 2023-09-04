import { productReducer } from './reducer/productReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer } from './reducer/cartReducer';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export type StateProps = ReturnType<typeof reducer>;

export default createStore(reducer, applyMiddleware(thunkMiddleware));
