import { useEffect, useState } from 'react';

import {
	StorageKeys,
	getLocalStorage,
	saveToLocalStorage,
} from '../../shared/services/localStorage';
import { products } from '../../shared/services/data';
import {
	Banner,
	Footer,
	Header,
	Highlight,
	Information,
	Product,
	Subscribe,
} from '../../shared/components';
import ProductProps from '../../models/product.interface';
import CartProps from '../../models/cart.interface';
import Carts from '../../models/carts.entity';

const Home = () => {
	const [cart, setCart] = useState(getLocalStorage(StorageKeys.CART));
	const cartList = new Carts(cart);

	useEffect(() => {
		saveToLocalStorage(StorageKeys.CART, cart);
	}, [cart]);

	const addToCart = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		product: ProductProps
	): void => {
		e.preventDefault();
		const cartExisted = cart.find((item: CartProps) => item.id === product.id);
		if (!cartExisted) {
			setCart([...cart, { ...product, quantity: 1 }]);
		} else {
			setCart(
				cart.map((item: CartProps) =>
					item.id === cartExisted.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		}
	};

	return (
		<main>
			<div className='home-page'>
				<Header
					headerType={''}
					cartList={cartList}
				/>
				<Banner />
				<Highlight />
				<section className='section section-recommend'>
					<div className='container'>
						<div className='section-header flex'>
							<h3 className='section-title'>Selected just for you</h3>
							<a
								className='section-link btn btn-outline-info'
								href='/'
							>
								SHOW MORE
							</a>
						</div>
						<section className='section section-product'>
							<div className='container'>
								<ul className='product-list row'>
									{products.map((product) => (
										<Product
											key={product.id}
											product={product}
											addToCart={addToCart}
										/>
									))}
								</ul>
							</div>
						</section>
					</div>
				</section>
				<Information />
				<section className='section section-product'>
					<div className='container'>
						<div className='section-header'>
							<h3 className='section-title txt-center'>Products in today</h3>
							<ul className='product-list row'>
								{products.map((product) => (
									<Product
										key={product.id}
										product={product}
										addToCart={addToCart}
									/>
								))}
							</ul>
						</div>
					</div>
				</section>
				<Subscribe />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
