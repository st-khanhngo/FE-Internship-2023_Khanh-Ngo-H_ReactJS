import { CartItem, CartProps } from "../../../models/cartItem";

interface ProductCartProps {
	cart: CartProps;
	changeCartQuantity: (id: number, quantity: number) => void;
	deleteCartItem: (id: number) => void;
}

export const ProductCart = ({
	cart,
	changeCartQuantity,
	deleteCartItem,
}: ProductCartProps) => {
	const {
		id,
		name,
		image,
		discount,
		price,
		quantity,
		finalPrice,
		getItemTotalPrice,
	} = new CartItem(cart);

	return (
		<li className='cart-item'>
			<div className={`cart row ${discount && `product-discount`}`}>
				<a
					className='cart-info col col-4'
					href='/'
				>
					<h4>{name}</h4>
					<img
						className='cart-img'
						src={image}
						alt={name}
					/>
				</a>
				<div className='btn-wrapper cart-action col col-4'>
					<button
						className='btn btn-change'
						onClick={() => changeCartQuantity(id, quantity - 1)}
					>
						-
					</button>
					<span>{quantity}</span>
					<button
						className='btn btn-change'
						onClick={() => changeCartQuantity(id, quantity + 1)}
					>
						+
					</button>
					<button
						className='btn btn-delete'
						onClick={() => deleteCartItem(id)}
					>
						DELETE
					</button>
				</div>
				<div className='cart-price col col-4'>
					<div className='price-wrapper'>
						<span className='product-price'>{price}</span>
						{discount > 0 && (
							<span className='product-price-discount'>{finalPrice}</span>
						)}
					</div>
					<p className='price-total'>
						Total:{" "}
						<span className='product-price'>
							{getItemTotalPrice(finalPrice, quantity)}
						</span>
					</p>
				</div>
			</div>
		</li>
	);
};
