import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./stylesheets/style.scss";
import Home from "./app/pages/home/Home";
import Cart from "./app/pages/cart/Cart";
import { useEffect, useState } from "react";
import {
	StorageKeys,
	getLocalStorage,
	saveToLocalStorage,
} from "./app/shared/services/localStorage";
import { routePaths } from "./app.routes";
import { ProductProps } from "./app/models/product";
import { Footer, Header } from "./app/shared/components";
import CartList from "./app/models/cartList";

function App() {
	const [cart, setCart] = useState(getLocalStorage(StorageKeys.CART));
	const cartList = new CartList(cart);

	useEffect(() => {
		saveToLocalStorage(StorageKeys.CART, cart);
	}, [cart]);

	const addToCart = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		product: ProductProps
	): void => {
		e.preventDefault();
		setCart(cartList.addToCart(product));
	};

	const changeCartQuantity = (id: number, quantity: number): void => {
		if (quantity > 0) {
			setCart(cartList.changeCartQuantity(id, quantity));
		} else {
			deleteCartItem(id);
		}
	};

	const deleteCartItem = (id: number): void => {
		if (window.confirm(`Do you want to delete this item?`)) {
			setCart(cartList.deleteCartItem(id));
		}
	};

	return (
		<BrowserRouter>
			<Header
				headerType={""}
				cartList={cartList}
			/>
			<Routes>
				{routePaths.map(
					(route) =>
						(route.element === Home && (
							<Route
								key={route.id}
								path={route.path}
								element={<route.element addToCart={addToCart} />}
							/>
						)) ||
						(route.element === Cart && (
							<Route
								key={route.id}
								path={route.path}
								element={
									<route.element
										cartList={cartList}
										changeCartQuantity={changeCartQuantity}
										deleteCartItem={deleteCartItem}
									/>
								}
							/>
						))
				)}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
