import React from 'react';
import Header from '../../shared/components/Header';
import CartList from '../../shared/components/CartList';

const Cart = () => {
	return (
		<>
			<Header props='header-cart' />
			<CartList />
		</>
	);
};

export default Cart;
