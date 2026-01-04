import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import ProductItem from "./ProductItem";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState(null);

  const isInCart = useSelector(state =>
    state.cart.some(item => item.id === Number(id))
  );

  useEffect(() => {
    // fetch selected product
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setProduct(data);

        // fetch similar products by category
        fetch("https://dummyjson.com/products")
          .then(res => res.json())
          .then(allData => {
            const filtered = allData.products.filter(
              p =>
                p.category === data.category &&
                p.id !== data.id
            );
            setSimilarProducts(filtered.slice(0, 4));
          });
      })
      .catch(() => setError("Unable to load product details"));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading product details...</p>;

  return (
    <>
      {/* PRODUCT DETAILS */}
      <div className="product-detail">
        <div className="detail-image">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
          />
        </div>

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

      {/* SIMILAR PRODUCTS */}
      {similarProducts.length > 0 && (
        <div className="similar-section">
          <h2>Similar Products</h2>

          <div className="grid">
            {similarProducts.map(item => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
