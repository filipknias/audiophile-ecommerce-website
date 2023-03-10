import { getProductByCategory } from "utilities/products";
import { useParams } from "react-router-dom";
import { Container, Hero } from "components/common";
import { ProductCard, ProductCategories } from "components/products";
import styled from "styled-components";
import { BrandStory } from "components/app";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 50px 0;
`;

export const Category = (): JSX.Element => {
  const params = useParams();
  const products = params.category ? getProductByCategory(params.category).sort((a, b) => Number(b.new) - Number(a.new)) : [];

  return (
    <>
      <Hero>{params.category}</Hero>
      <Container>
        <Stack>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <ProductCategories />
          <BrandStory />
        </Stack>
      </Container>
    </>
  )
}