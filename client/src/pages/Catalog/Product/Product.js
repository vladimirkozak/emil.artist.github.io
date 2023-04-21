import { Link } from "react-router-dom";

const Product = ({
  id,
  title,
}) => {
  return (
    <li>
      <Link to={`/catalog/${id}`}>{title}</Link>
    </li>
  );
};

export default Product;