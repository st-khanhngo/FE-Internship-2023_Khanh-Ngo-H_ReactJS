import { CartItem } from "./cartItem";
import { Product } from "./product";

export default class CartList {
	cart: CartItem[];

	constructor(cart: CartItem[]) {
		this.cart = cart.map((c) => new CartItem(c));
	}

	getCartTotalPrice = () => {
		return this.cart
			.reduce((total, item) => total + item.finalPrice * item.quantity, 0)
			.toFixed(2);
	};

	getCartTotalItem = () => {
		return this.cart.reduce((total, item) => total + item.quantity, 0);
	};

	addToCart = (product: Product) => {
		const cartExisted = this.cart.find(
			(item: CartItem) => item.id === product.id
		);
		if (!cartExisted) {
			return [...this.cart, { ...product, quantity: 1 }];
		} else {
			return this.cart.map((item: CartItem) =>
				item.id === cartExisted.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
		}
	};

	changeCartQuantity = (id: number, quantity: number) => {
		return this.cart.map((item: CartItem) =>
			item.id === id ? { ...item, quantity: quantity } : item
		);
	};

	deleteCartItem = (id: number) => {
		return this.cart.filter((item: CartItem) => item.id !== id);
	};
}
