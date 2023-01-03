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
        <Title role="product-title">{product.name}</Title>
        <Description role="product-description">{product.description}</Description>
        <Link to={`/${product.category}/${product.slug}`} role="product-link">
          <OrangeButton>See product</OrangeButton>
        </Link>
      </Content>
    </Wrapper>
  )
}