import Btn from "../../components/UI/Btn/Btn";
import Container from "../../components/containers/Container/Container";
import "./Cart.scss";
import ProductsList from "./ProductstList/ProductsList";

const Cart = () => {
  const visaUrl =
    "https://www.adidas.com/static/checkout/react/9d5ad96/assets/img/accepted-payment-methods/icon-adidas-visa.svg";

  return (
    <Container>
      <h2>Your cart</h2>
      <div className="cart">
        <div className="cart__products">
          <div>total: 3 items</div>
          <ProductsList />
        </div>
        <div className="cart__checkout checkout">
          <Btn title={"Checkout"} color={"#000"} background={"#ffb301"} />
          <div className="checkout__methods">
            <div>ACCEPTED PAYMENT METHODS</div>
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
