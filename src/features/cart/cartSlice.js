import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const item = state.find(i => i.id === action.payload.id);
      if (item && action.payload.qty >= 1) {
        item.quantity = action.payload.qty;
      }
    },
    clearCart() {
      return [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
