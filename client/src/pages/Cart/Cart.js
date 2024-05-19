import Btn from "@components/UI/Btn/Btn";
import Container from "@components/containers/Container/Container";
import "./Cart.scss";
import ProductsList from "./ProductstList/ProductsList";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const visaUrl =
    "https://www.adidas.com/static/checkout/react/9d5ad96/assets/img/accepted-payment-methods/icon-adidas-visa.svg";

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <Container>
      <h2>Your cart</h2>
      <div className="cart">
        <div className="cart__products">
          <div>total: {products.length} items</div>
          <ProductsList products={products} />
        </div>
        <div className="cart__checkout checkout">
          <div className="total">
            <h3>Order summary</h3>
            <span>${totalPrice()}</span>
          </div>
          <Btn title={"Checkout"} color={"#000"} background={"#ffb301"} />
          <div className="checkout__methods">
            <div>Accepted payment methods</div>
            <div>
              <img src={visaUrl} />
              <img src={visaUrl} />
              <img src={visaUrl} />
              <img src={visaUrl} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
