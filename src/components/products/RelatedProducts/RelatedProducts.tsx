import { Breakpoints } from "types/Product";
import { OrangeButton } from "components/common";
import { ProductWrapper, Image, Title, Wrapper } from './styles';
import { Link } from "react-router-dom";

interface Props {
  products: {
    slug: string;
    name: string;
    category: string;
    image: Breakpoints;
  }[];
}

export const RelatedProducts = ({ products }: Props): JSX.Element => {
  return (
    <Wrapper>
      {products.map(({ slug, image, name }) => (
        <ProductWrapper key={slug}>
          <Image image={image}></Image>
          <Title>{name}</Title>
          <Link to={`/${slug}`}>
            <OrangeButton>See product</OrangeButton>
          </Link>
        </ProductWrapper>
      ))}
    </Wrapper>
  )
}