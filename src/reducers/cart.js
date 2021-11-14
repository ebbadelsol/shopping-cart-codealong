import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			// Here we want to check if the item already excists in the item array
			const existingProduct = state.items.find((item) => item.id === action.payload.id);

			if (existingProduct) {
				existingProduct.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
			// This looks like we are mutating but behind the scenes redux-toolkit is using an immutible library which is actually giving us a new version of state which has a new item
			// By writing it like this: ({ ...action.payload, quantity: 1 })
			// And not like this: (action.payload)
			// (We have added a new key.) We have added a proporty to our product when it is added to the cart state
		},
		removeItem: (state, action) => {
			const existingProduct = state.items.find((item) => item.id === action.payload.id);

			if (existingProduct && existingProduct.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== action.payload.id);
			} else if (existingProduct) {
				existingProduct.quantity -= 1;
			}
		},
	},
});
