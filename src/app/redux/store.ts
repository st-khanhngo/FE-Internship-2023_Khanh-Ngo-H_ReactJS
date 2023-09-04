import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { cartReducer, productReducer } from './reducer';

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export type StateProps = ReturnType<typeof reducer>;

export default createStore(reducer, applyMiddleware(thunkMiddleware));
