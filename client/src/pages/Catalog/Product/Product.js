import { Link } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, title, image, price }) => {
  return (
    <Link to={`/catalog/${id}`}>
      <div className="product">
        <img
          src={process.env.REACT_APP_UPLOAD_URL + image.data.attributes.url}
          className="product__image"
        />
        <div className="product__discribe discribe">
          <div className="discribe__name">{title}</div>
          <div className="discribe__price">{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
