import { Link } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, title, image }) => {
  return (
    <Link to={`/catalog/${id}`}>
      <div className="product">
        {/* {title} */}
        <img
          src={require("../testData/images/b3fce3f4-b0e3-11ec-8b90-00505683661b.jpg")}
          className="product__image"
        />
      </div>
    </Link>
  );
};

export default Product;
