import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/products/productSlice";

const Header = () => {
  const cartCount = useSelector(state => state.cart.length);
  const dispatch = useDispatch();

  return (
    <header>
      <Link to="/">ShoppyGlobe</Link>

      <input
        type="text"
        placeholder="Search..."
        onChange={e => dispatch(setSearch(e.target.value))}
      />

      <Link to="/cart">Cart ({cartCount})</Link>
    </header>
  );
};

export default Header;
