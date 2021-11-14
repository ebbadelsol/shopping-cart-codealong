import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Products } from "components/Products";
import { Cart } from "components/Cart";

import { cart } from "reducers/cart";
import { products } from "reducers/products";

// Combining two reducers
const reducer = combineReducers({
	cart: cart.reducer,
	products: products.reducer,
});

// Telling Redux to create a new store that is using the reducer created above (that is combining two reducers)
const store = configureStore({ reducer }); // reducer means the same thing as reducer: reducer. (reducers equals reducer.)

export const App = () => (
	// The Provider is providing the store to any components that is within it. This means that we can use the Hooks.
	<Provider store={store}>
		<Cart />
		<Products />
	</Provider>
);
