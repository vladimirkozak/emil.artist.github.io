import Container from "../../components/containers/Container/Container";
import "./Cart.scss";
import ProductsList from "./ProductstList/ProductsList";

const Cart = () => {
  return (
    <Container>
      <h2>Your cart</h2>
      <div className="cart">
        <div className="cart__products">
          <div>total</div>
          <ProductsList />
        </div>
        <div className="cart__checkout">checkout</div>
      </div>
    </Container>
  );
};

export default Cart;
