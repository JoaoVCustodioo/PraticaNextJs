import styled from "styled-components";
import ProductsCard from "./ProductsCard";

export default function ProductsGrid({ products }) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
