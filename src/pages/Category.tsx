import { getProductByCategory } from "utilities/products";
import { useParams } from "react-router-dom";
import { Container, Hero } from "components/common";
import { ProductCard } from "components/products";
import styled from "styled-components";
import { CategoriesCardsList, BrandStory } from "components/app";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 50px 0;
`;

export const Category = (): JSX.Element => {
  const params = useParams();
  const products = params.category ? getProductByCategory(params.category) : [];

  return (
    <>
      <Hero>{params.category}</Hero>
      <Container>
        <Stack>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <CategoriesCardsList />
          <BrandStory />
        </Stack>
      </Container>
    </>
  )
}