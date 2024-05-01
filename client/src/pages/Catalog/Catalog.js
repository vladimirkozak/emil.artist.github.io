import Container from "@components/containers/Container/Container";
import Grid from "@components/containers/Grid/Grid";
import Product from "./Product/Product";
import { DUMMY_CATALOG } from "./testData/data/data";

const Catalog = () => {
  return (
    <Container>
      <Grid>
        {DUMMY_CATALOG.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.img}
            price={product.price}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Catalog;
