import Container from "../../components/containers/Container/Container";
import Grid from "../../components/containers/Grid/Grid";
import Product from "./Product/Product";
import { DUMMY_CATALOG } from "./testData/data/data";

const Catalog = () => {
  return (
    <Container>
      <h1 style={{"color": "white"}}>Catalog</h1>
      <Grid>
        {DUMMY_CATALOG.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.img}
          />
        ))}
        {/* <li>
          <Link to='/catalog/1'>product 1</Link>
        </li>
        <li>
          <Link to='/catalog/2'>product 2</Link>
        </li>
        <li>
          <Link to='/catalog/3'>product 3</Link>
        </li> */}
      </Grid>
    </Container>
  );
};

export default Catalog;
