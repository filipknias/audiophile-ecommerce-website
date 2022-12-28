import styled from "styled-components";
import { Hero, CategoryCard, BrandStory } from "components/app";
import { Container } from "components/common";
import HeadphonesImage from 'assets/images/shared/desktop/image-headphones.png';
import SpeakersImage from 'assets/images/shared/desktop/image-speakers.png';
import EarphonesImage from 'assets/images/shared/desktop/image-earphones.png';
import { ZX9Speaker, ZX7Speaker, YX1Earphones } from "components/products";

const CategoriesGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  margin-top: 12.5rem;
  margin-bottom: 7.5rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 120px;
    flex-direction: column;
    margin-top: 7.5rem;
  }
`;

const ProductsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 100px;
`;

export const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Container>
        <CategoriesGroup>
          <CategoryCard image={HeadphonesImage} title="Headphones" href="/headphones" />
          <CategoryCard image={SpeakersImage} title="Speakers" href="/speakers" />
          <CategoryCard image={EarphonesImage} title="Earphones" href="/earphones" />
        </CategoriesGroup>
        <ProductsGroup>
          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
        </ProductsGroup>
        <BrandStory />
      </Container>
    </>
  )
}