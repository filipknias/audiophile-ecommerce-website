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

export const CartSummary = (): JSX.Element => {
  const { cart, total } = useAppSelector((state) => state.cart);
  return (
    <Wrapper>
      <Stack>
        <Header>Summary</Header>
        <CartItemsWrapper>
          {cart.map((item) => (
            <CartItem>
              <CartItemGroup>
                <ItemImage src={`/src/assets/${item.image}`} alt={item.name} />
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
            <ListItemText>$50</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemTitle>Vat (included)</ListItemTitle>
            <ListItemText>$120</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemTitle>Grand total</ListItemTitle>
            <ListItemTextOrange>$800</ListItemTextOrange>
          </ListItem>
        </List>
      </Stack>
    </Wrapper>
  )
}