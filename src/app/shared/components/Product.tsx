import { useState, useEffect } from 'react';
import { StorageKeys, getLocalStorage } from '../services/localStorage';

interface ProductProps {
	id: number;
	name: string;
	image: string;
	discount: number;
	price: number;
}

const Product = ({ id, name, image, discount, price }: ProductProps) => {
	const product = { id, name, image, discount, price };
	const [cart, setCart]: any = useState([]);

	useEffect(() => {
		const cartList = getLocalStorage(StorageKeys.CART);
		if (cartList) {
			setCart(cartList);
		}
		console.log(1);
	}, []);

	const addToCart = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		product: ProductProps
	) => {
		e.preventDefault();
		if (cart?.length) {
			const cartExisted = cart.find((item: any) => item.id === product.id);
			if (!cartExisted) {
				setCart([...cart, { ...product, quantity: 1 }]);
				console.log(cart, product);
			} else {
				console.log('add');
			}
		} else {
			setCart([{ ...product, quantity: 1 }]);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	};

	return (
		<li className='product-item col col-3 col-sm-6'>
			<div className={`product ${discount > 0 && 'product-discount'}`}>
				<button
					className='btn btn-primary btn-cart ${product.status}'
					onClick={(e) => addToCart(e, product)}
				>
					ADD TO CART
				</button>
				<a
					className='product-link'
					href=''
				>
					{discount > 0 && (
						<span className='badge badge-danger'>-{discount}%</span>
					)}
					<img
						className='product-img'
						src={image}
						alt={name}
					/>
					<h4 className='product-title'>{name}</h4>
					<div className='price-wrapper flex ${product.status}'>
						{discount > 0 && (
							<span className='product-price-discount'>
								{(price * (100 - discount)) / 100}
							</span>
						)}
						<span className='product-price'>{price}</span>
					</div>
				</a>
			</div>
		</li>
	);
};

export default Product;
