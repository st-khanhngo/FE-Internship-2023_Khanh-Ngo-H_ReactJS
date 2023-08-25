import React from 'react';
import CartItem from './CartItem';

const CartList = () => {
	return (
		<div className='cart-page'>
			<section className='section section-cart'>
				<div className='container'>
					<CartItem />
				</div>
			</section>
		</div>
	);
};

export default CartList;
