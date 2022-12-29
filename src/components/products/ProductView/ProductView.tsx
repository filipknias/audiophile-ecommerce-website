import { Product } from "types/Product";
import { GoBackLabel, Content, Description, NewProductLabel, Price, ProductImage, ProductWrapper, Title } from './styles';
import { Container, OrangeButton } from "components/common";

interface Props {
  product: Product;
}

export const ProductView = ({ product }: Props): JSX.Element => {
  return (
    <Container>
      <GoBackLabel>Go Back</GoBackLabel>
      <ProductWrapper>
        <ProductImage image={product.categoryImage}></ProductImage>
        <Content>
          {product.new && <NewProductLabel>New product</NewProductLabel>}
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price}</Price>
          <OrangeButton>Add to cart</OrangeButton>
        </Content>
      </ProductWrapper>
    </Container>
  )
}