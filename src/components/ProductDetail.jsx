import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const isInCart = useSelector(state =>
    state.cart.some(item => item.id === Number(id))
  );

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setError("Unable to load product details"));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-detail">
      {/* LEFT - IMAGE */}
      <div className="detail-image">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </div>

      {/* RIGHT - INFO */}
      <div className="detail-info">
        <h1>{product.title}</h1>
        <p className="brand">Brand: {product.brand}</p>

        <p className="price">₹{product.price}</p>
        <p className="rating">⭐ {product.rating} / 5</p>

        <p className="description">{product.description}</p>

        <div className="detail-actions">
          {!isInCart ? (
            <button
              className="add-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="go-btn"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          )}

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
