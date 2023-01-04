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
  EmptyCartText,
} from './styles';
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { AmountInput } from "components/products";
import { increaseItemQuantity, decreaseItemQuantity, removeItem, clearCart } from "redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { hideModal } from "redux/features/modalSlice";
import { toast } from "react-toastify";
import { CartItem as ICartItem } from "types/CartItem";
import { useLocalStorage } from "hooks/useLocalStorage";
import { LOCAL_STORAGE_PREFIX } from "data/constants";

export const CartModal = (): JSX.Element => {
  const { cart, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [storedItems, setStoredItems] = useLocalStorage<ICartItem[]>(`${LOCAL_STORAGE_PREFIX}-CART`);

  const handleAmountIncrease = (id: number) => {
    dispatch(increaseItemQuantity(id));
    setStoredItems((cartItems) => cartItems?.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity + 1 };
      return item;
    }));
  }

  const handleAmountDecrease = (id: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(decreaseItemQuantity(id));
      setStoredItems((cartItems) => cartItems?.map((item) => {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 };
        return item;
      }));
    } else {
      dispatch(removeItem(id));
      setStoredItems((cartItems) => cartItems?.filter((item) => {
        return item.id !== id;
      }));
    }
  }

  const handleCheckoutClick = () => {
    dispatch(hideModal());
    navigate("/checkout");
  }

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart is empty");
    setStoredItems([]);
  }

  return (
    <Modal>
      <Stack>
        {cart.length > 0 ? (
          <>
            <HeaderWrapper>
              <HeaderTitle>Cart ({cart.length})</HeaderTitle>
              <RemoveAll onClick={handleClearCart}>Remove All</RemoveAll>
            </HeaderWrapper>
            <ItemsWrapper>
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <ItemGroup>
                    <ItemImage src={`/assets/${item.image}`} alt={item.name} />
                    <div>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>${item.price}</ItemPrice>
                    </div>
                  </ItemGroup>
                  <div style={{ width: '100px' }}>
                    <AmountInput
                      amount={item.quantity}
                      onAmountDecrease={() => handleAmountDecrease(item.id, item.quantity)}
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
          </>
        ) : (
          <EmptyCartText>Your cart is empty</EmptyCartText>
        )}
      </Stack>
    </Modal>
  )
}