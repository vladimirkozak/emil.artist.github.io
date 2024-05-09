import Container from "@components/containers/Container/Container";
import Grid from "@components/containers/Grid/Grid";
import Product from "./Product/Product";
import useFetch from "../../hooks/useFetch";

const Catalog = () => {
  const { data, loading, error } = useFetch("/products?populate=*");

  return (
    <Container>
      <Grid>
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((product) => (
              <Product
                key={product.attributes.id}
                id={product.attributes.id}
                title={product.attributes.title}
                image={product.attributes.image}
                price={product.attributes.price}
              />
            ))}
      </Grid>
    </Container>
  );
};

export default Catalog;
