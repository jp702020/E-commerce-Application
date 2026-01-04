export const selectCartItems = (state) => state.cart;

export const selectCartTotalQuantity = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalPrice = (state) =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
