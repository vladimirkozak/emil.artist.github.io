import ProductItem from "./ProductItem/ProductItem";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products?.map((product) => (
        <ProductItem
          id={product.id}
          title={product.title}
          image={process.env.REACT_APP_UPLOAD_URL + product.image}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default ProductsList;
