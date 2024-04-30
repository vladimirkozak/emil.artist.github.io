import "./ProductItem.scss";

const ProductItem = ({ title, image, price }) => {
  return (
    <div className="cart-item">
      <img src={image} className="cart__image" />
      <div className="cart-item__description">
        <div>
          <div>{title}</div>
          <p>{price}</p>
        </div>
        <div>X</div>
      </div>
    </div>
  );
};

export default ProductItem;
