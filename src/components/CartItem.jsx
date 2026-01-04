import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-img"
        loading="lazy"
      />

      {/* Product Info */}
      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>

        {/* Quantity Controls */}
        <div className="qty-control">
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, qty: item.quantity - 1 }))
            }
            disabled={item.quantity === 1}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, qty: item.quantity + 1 }))
            }
          >
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
