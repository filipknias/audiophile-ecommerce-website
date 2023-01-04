import {
  CartItem,
  CartItemGroup,
  CartItemsWrapper,
  Header,
  ItemAmount,
  ItemImage,
  ItemName,
  ItemPrice,
  List,
  ListItem,
  ListItemText,
  ListItemTextOrange,
  ListItemTitle,
  Stack,
  Wrapper,
} from './styles';
import { useAppSelector } from 'redux/hooks';
import { SHIPPING_FEE, TAX_RATE } from 'data/constants';
import { OrangeButton } from 'components/common';

interface Props {
  onSubmit: () => void;
}

export const CartSummary = ({ onSubmit }: Props): JSX.Element => {
  const { cart, total } = useAppSelector((state) => state.cart);
  const taxValue = total * TAX_RATE;
  const grandTotal = total + taxValue + SHIPPING_FEE;

  return (
    <Wrapper>
      <Stack>
        <Header>Summary</Header>
        <CartItemsWrapper>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <CartItemGroup>
                <ItemImage src={`/assets/${item.image}`} alt={item.name} />
                <div>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price}</ItemPrice>
                </div>
              </CartItemGroup>
              <ItemAmount>x{item.quantity}</ItemAmount>
            </CartItem>
          ))}
        </CartItemsWrapper>
        <List>
          <ListItem>
            <ListItemTitle>Total</ListItemTitle>
            <ListItemText>${total}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemTitle>Shipping</ListItemTitle>
            <ListItemText>${SHIPPING_FEE}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemTitle>Vat (included)</ListItemTitle>
            <ListItemText>${taxValue.toFixed(1)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemTitle>Grand total</ListItemTitle>
            <ListItemTextOrange>${grandTotal.toFixed(1)}</ListItemTextOrange>
          </ListItem>
        </List>
        <OrangeButton 
          full 
          onClick={onSubmit} 
          disabled={cart.length === 0}
        >
          Continue & Pay
        </OrangeButton>
      </Stack>
    </Wrapper>
  )
}