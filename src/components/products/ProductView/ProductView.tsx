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
  StackTitle,
} from './styles';
import { Container, OrangeButton } from "components/common";
import { AmountInput, ProductFeatures, ProductGallery, RelatedProducts, ProductCategories } from "components/products";
import { BrandStory } from "components/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { addItem } from "redux/features/cartSlice";
import { toast } from 'react-toastify';

interface Props {
  product: Product;
}

export const ProductView = ({ product }: Props): JSX.Element => {
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAmountIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const handleAmountDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const relatedProducts = product.others.map((relatedProduct) => ({
    ...relatedProduct,
    category: product.category,
  }));

  const handleAddItem = () => {
    dispatch(addItem({
      id: product.id,
      image: product.cartImage,
      name: product.name,
      price: product.price,
      quantity: amount,
      slug: product.slug,
    }));
    toast.success(`Item ${product.name} was added to cart`);
  }

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
              <div style={{ width: '150px' }}>
                <AmountInput
                  amount={amount}
                  onAmountDecrease={handleAmountDecrease}
                  onAmountIncrease={handleAmountIncrease}
                />
              </div>
              <OrangeButton onClick={handleAddItem} role="add-item-button">Add to cart</OrangeButton>
            </ButtonGroup>
          </Content>
        </ProductWrapper>
        <ProductFeatures
          featuresText={product.features} 
          includedItems={product.includedItems} 
        />
        <ProductGallery images={product.gallery} />
        <Stack>
          <StackTitle>You may also like</StackTitle>
          <RelatedProducts products={relatedProducts} />
        </Stack>
        <ProductCategories />
        <BrandStory />
      </Stack>
    </Container>
  )
}