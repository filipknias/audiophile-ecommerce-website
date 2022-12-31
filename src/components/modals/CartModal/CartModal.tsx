import { Modal, OrangeButton } from "components/common";
import {
  CartItem,
  ItemsWrapper,
  HeaderTitle,
  HeaderWrapper,
  ItemGroup,
  ItemImage,
  ItemName,
  ItemPrice,
  RemoveAll,
  Stack,
  Total,
  TotalPrice,
  TotalWrapper,
} from './styles';
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { AmountInput } from "components/products";
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from "redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { hideModal } from "redux/features/modalSlice";

export const CartModal = (): JSX.Element => {
  const { cart, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAmountIncrease = (id: number) => {
    dispatch(increaseItemQuantity(id));
  }

  const handleAmountDecrease = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) return;
    if (cartItem.quantity > 1) {
      dispatch(decreaseItemQuantity(id));
    } else {
      dispatch(removeItem(id));
    }
  }

  const handleCheckoutClick = () => {
    dispatch(hideModal());
    navigate("/checkout");
  }

  return (
    <Modal>
      <Stack>
        <HeaderWrapper>
          <HeaderTitle>Cart ({cart.length})</HeaderTitle>
          <RemoveAll>Remove All</RemoveAll>
        </HeaderWrapper>
        <ItemsWrapper>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemGroup>
                <ItemImage src={`/src/assets/${item.image}`} alt={item.name} />
                <div>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price}</ItemPrice>
                </div>
              </ItemGroup>
              <div style={{ width: '100px' }}>
                <AmountInput
                  amount={item.quantity}
                  onAmountDecrease={() => handleAmountDecrease(item.id)}
                  onAmountIncrease={() => handleAmountIncrease(item.id)}
                />
              </div>
            </CartItem>
          ))}
        </ItemsWrapper>
        <TotalWrapper>
          <Total>Total</Total>
          <TotalPrice>${total}</TotalPrice>
        </TotalWrapper>
        <OrangeButton full onClick={handleCheckoutClick}>Checkout</OrangeButton>
      </Stack>
    </Modal>
  )
}