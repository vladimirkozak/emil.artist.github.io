import { DUMMY_CATALOG } from "../../Catalog/testData/data/data";
import ProductItem from "./ProductItem/ProductItem";

const ProductsList = () => {
  return (
    <div>
      {DUMMY_CATALOG.map((product) => (
        <ProductItem
          title={product.title}
          image={product.img}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
