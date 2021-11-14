import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const Cart = () => {
	// Fetch products from the cart store
	const products = useSelector((store) => store.cart.items);

	// Calculate total from the sum of all products in the cart
	// It starts at 0 and assign 0 to the total argument and it assigns item to the current items that it is iterating over and then it iterates over the function for each item and then we add to the total. So if we have 4 items that cost 100 kr, the total will be 400 kr.
	const totalPrice = useSelector((store) => store.cart.items.reduce((total, item) => total + item.price * item.quantity, 0));
	//This is an array reducer and not a redux reducer

	return (
		<div className="cart">
			<div className="total">
				<span className="emoji" role="img" aria-label="cart">
					🛒
				</span>
				<div className="amount">Total: {totalPrice}:-</div>
			</div>

			<ul className="items">
				{products.map((product) => (
					<CartItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};
