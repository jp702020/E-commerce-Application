import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../features/cart/cartSelectors";
import { useState } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    const { name, email, mobile, address } = form;

    // 🔴 EMPTY CHECK
    if (!name || !email || !mobile || !address) {
      alert("Please fill all the fields");
      return;
    }

    alert("Order placed successfully 🎉");
    dispatch(clearCart());
    navigate("/");
  };

  if (cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div className="checkout-page">
      {/* FORM */}
      <div className="checkout-form">
        <h2>Checkout</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
        />

        <button className="place-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>

      {/* SUMMARY */}
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
