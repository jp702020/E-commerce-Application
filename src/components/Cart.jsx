import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import {
  selectCartTotalPrice,
  selectCartTotalQuantity
} from "../features/cart/cartSelectors";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalQty = useSelector(selectCartTotalQuantity);

  if (cart.length === 0) {
    return <h3>Your cart is empty 🛒</h3>;
  }

  return (
    <div className="cart-page">
      {/* Left Section */}
      <div className="cart-list">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Right Section - Summary */}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: <b>{totalQty}</b></p>
        <p>Total Price: <b>₹{totalPrice}</b></p>

        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
