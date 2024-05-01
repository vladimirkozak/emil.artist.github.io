import "./ProductItem.scss";
import CloseIcon from "@mui/icons-material/Close";

const ProductItem = ({ title, image, price }) => {
  return (
    <div className="cart-item">
      <img src={image} className="cart__image" />
      <div className="cart-item__description">
        <div>
          <div>{title}</div>
          <p>{price}</p>
        </div>

        <button className="cart-item__close">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
