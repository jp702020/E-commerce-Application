import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../features/cart/cartSelectors";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const placeOrder = () => {
    alert("Order placed successfully 🎉");
    dispatch(clearCart());
    navigate("/");
  };

  if (cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div className="checkout-page">
      {/* LEFT - FORM */}
      <div className="checkout-form">
        <h2>Checkout</h2>

        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <input placeholder="Mobile Number" />
        <input placeholder="Delivery Address" />

        <button className="place-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="checkout-summary">
        <h3>Order Summary</h3>

        {cartItems.map(item => (
          <div key={item.id} className="summary-item">
            <span>{item.title} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr />
        <h3>Total: ₹{totalPrice}</h3>
      </div>
    </div>
  );
};

export default Checkout;
