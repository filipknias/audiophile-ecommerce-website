import { Product } from "types/Product";
import { 
  GoBackLabel, 
  Content,
  Description, 
  NewProductLabel, 
  Price, 
  ProductImage, 
  ProductWrapper, 
  Title, 
  ButtonGroup,
  Stack,
} from './styles';
import { Container, OrangeButton } from "components/common";
import { AmountInput, ProductFeatures, ProductGallery } from "components/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductView = ({ product }: Props): JSX.Element => {
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();

  const handleAmountIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const handleAmountDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  return (
    <Container>
      <Stack>
        <GoBackLabel onClick={() => navigate(-1)}>Go Back</GoBackLabel>
        <ProductWrapper>
          <ProductImage image={product.categoryImage}></ProductImage>
          <Content>
            {product.new && <NewProductLabel>New product</NewProductLabel>}
            <Title>{product.name}</Title>
            <Description>{product.description}</Description>
            <Price>${product.price}</Price>
            <ButtonGroup>
              <AmountInput
                amount={amount}
                onAmountDecrease={handleAmountDecrease}
                onAmountIncrease={handleAmountIncrease}
              />
              <OrangeButton>Add to cart</OrangeButton>
            </ButtonGroup>
          </Content>
        </ProductWrapper>
        <ProductFeatures
          featuresText={product.features} 
          includedItems={product.includedItems} 
        />
        <ProductGallery images={product.gallery} />
      </Stack>
    </Container>
  )
}