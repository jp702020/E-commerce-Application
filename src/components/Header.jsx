import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/products/productSlice";
import { selectCartTotalQuantity } from "../features/cart/cartSelectors";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartTotalQuantity);

  // dummy login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Customer");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserName("Customer");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="main-header">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        🛍️ ShoppyGlobe
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="header-actions">
        {/* LOGIN / USER */}
        {!isLoggedIn ? (
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <div className="user-info">
            <span>👤 {userName}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

        {/* CART */}
        <Link to="/cart" className="cart-link">
          🛒
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
