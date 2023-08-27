import ProductProps from '../../models/product.interface';

interface Props {
	product: ProductProps;
	addToCart: Function;
}

export const Product = ({ product, addToCart }: Props) => {
	const { name, image, discount, price } = product;

	return (
		<li className='product-item col col-3 col-sm-6'>
			<div className={`product ${discount > 0 && 'product-discount'}`}>
				<button
					className='btn btn-primary btn-cart'
					onClick={(e) => addToCart(e, product)}
				>
					ADD TO CART
				</button>
				<a
					className='product-link'
					href='/'
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
					<div className='price-wrapper flex'>
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
