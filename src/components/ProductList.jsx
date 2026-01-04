import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const search = useSelector(state => state.products.search);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p>{error}</p>;

  return (
    <div className="grid">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
