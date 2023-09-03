import { createStore } from 'redux';
import { cartReducer } from './reducer';

export default createStore(cartReducer);
