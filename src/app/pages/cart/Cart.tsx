import React, { useEffect, useState } from 'react';
import Header from '../../shared/components/Header';
import {
	StorageKeys,
	getLocalStorage,
	saveToLocalStorage,
} from '../../shared/services/localStorage';
import CartItem from '../../shared/components/CartItem';
import { CartProps } from '../../models/cart.interface';
import Carts from '../../models/carts.entity';

const Cart = () => {
	const [cart, setCart]: any = useState(getLocalStorage(StorageKeys.CART));
	const cartList = new Carts(cart);

	useEffect(() => {
		saveToLocalStorage(StorageKeys.CART, cart);
	}, [cart]);

	const changeCartQuantity = (id: number, quantity: number) => {
		const cartItem: CartProps = cart.find((item: CartProps) => item?.id === id);
		if (quantity > 0) {
			setCart(
				cart.map((item: CartProps) =>
					item.id === cartItem.id ? { ...item, quantity: quantity } : item
				)
			);
		} else {
			deleteCartItem(id);
		}
	};

	const deleteCartItem = (id: number) => {
		if (window.confirm(`Do you want to delete this item?`)) {
			setCart(cart.filter((item: CartProps) => item.id !== id));
		}
	};

	return (
		<>
			<Header
				headerType='header-cart'
				cartList={cartList}
			/>
			<div className='cart-page'>
				<section className='section section-cart'>
					<div className='container'>
						<ul className='cart-list'>
							{cart.map((item: CartProps) => {
								return (
									<CartItem
										key={item.id}
										cart={item}
										changeCartQuantity={changeCartQuantity}
										deleteCartItem={deleteCartItem}
									/>
								);
							})}
						</ul>
						<p className='cart-total'>
							TOTAL CART PRICE: ${cartList.cartTotalPrice()}
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default Cart;
