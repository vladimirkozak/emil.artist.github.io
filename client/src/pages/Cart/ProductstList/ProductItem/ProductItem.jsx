import { useDispatch } from "react-redux";
import "./ProductItem.scss";
import CloseIcon from "@mui/icons-material/Close";
import { removeItem } from "@redux/cartReducer";

const ProductItem = ({ id, title, image, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={image} className="cart__image" />
      <div className="cart-item__description">
        <div>
          <div>{title}</div>
          <p>{price}</p>
          <p>quantity: {quantity}</p>
        </div>

        <button
          className="cart-item__close"
          onClick={() => dispatch(removeItem(id))}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
