import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = useSelector(state =>
    state.cart.some(item => item.id === product.id)
  );

  const handleBuyNow = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
    navigate("/checkout");
  };

  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <h3>{product.title}</h3>
      </Link>

      <p>₹{product.price}</p>

      <div className="product-actions">
        {!isInCart ? (
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        ) : (
          <button onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
        )}

        {/* DIRECT BUY */}
        <button className="buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
