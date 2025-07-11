import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
  cartGetTotal: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const i = state.cartItems.findIndex(c => c.id === action.payload.id);
      if (i >= 0) {
        alert("Already added to the Cart");
        return;
      }

      const tp = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(tp);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const filteredCart = state.cartItems.filter(c => c.id !== action.payload.id);
      state.cartItems = filteredCart;

      alert("Removed from the Cart");
      localStorage.setItem("cartItems", JSON.stringify(filteredCart));
    },

    increamentProduct: (state, action) => {
      const i = state.cartItems.findIndex(c => c.id === action.payload.id);
      state.cartItems[i].cartQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decrementProduct: (state, action) => {
      const i = state.cartItems.findIndex(c => c.id === action.payload.id);
      state.cartItems[i].cartQuantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotal: (state) => {
      const total = state.cartItems.reduce(
        (sum, item) => sum + (item.pprice) * item.cartQuantity,
        0
      );
      state.cartGetTotal = (total.toFixed(2));

      state.cartQuantity = state.cartItems.reduce(
        (qty, item) => qty + item.cartQuantity,
        0
      );
    }
  }
});

export const { addToCart, removeFromCart, getTotal, increamentProduct, decrementProduct } = cartSlice.actions;
export default cartSlice.reducer;
