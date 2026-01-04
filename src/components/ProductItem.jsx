import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = useSelector(state =>
    state.cart.some(item => item.id === product.id)
  );

  return (
    <div className="card">
      {/* CLICKABLE IMAGE */}
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </Link>

      {/* CLICKABLE TITLE */}
      <Link to={`/product/${product.id}`} className="product-link">
        <h3>{product.title}</h3>
      </Link>

      <p>₹{product.price}</p>

      {/* CART ACTION */}
      {!isInCart ? (
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      ) : (
        <button onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
