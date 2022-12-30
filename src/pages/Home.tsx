import styled from "styled-components";
import { BrandStory } from "components/app";
import { Container, FadeInOnScroll } from "components/common";
import { ZX9Speaker, ZX7Speaker, YX1Earphones, ProductHero, ProductCategories } from "components/products";

const ProductsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 100px;
`;

export const Home = (): JSX.Element => {
  return (
    <>
      <ProductHero />
      <Container>
        <div style={{ margin: '7.5rem 0' }}>
          <ProductCategories />
        </div>
        <ProductsGroup>
          <FadeInOnScroll>
            <ZX9Speaker />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <ZX7Speaker />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <YX1Earphones />
          </FadeInOnScroll>
        </ProductsGroup>
        <FadeInOnScroll>
          <BrandStory />
        </FadeInOnScroll>
      </Container>
    </>
  )
}