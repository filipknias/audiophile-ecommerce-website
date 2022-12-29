import { Product } from "types/Product";
import { Wrapper, Content, Description, NewProductLabel, ProductImage, Title } from './styles';
import { OrangeButton } from "components/common";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props): JSX.Element => {
  return (
    <Wrapper>
      <ProductImage image={product.categoryImage}></ProductImage>
      <Content>
        {product.new && <NewProductLabel>New product</NewProductLabel>}
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <OrangeButton>See product</OrangeButton>
      </Content>
    </Wrapper>
  )
}