import CartImage from 'assets/images/shared/desktop/icon-cart.svg';
import { Wrapper, Cart, AmountDisplay } from './styles';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { openModal } from 'redux/features/modalSlice';
import { CartModal } from 'components/modals';

export const CartIcon = (): JSX.Element => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Wrapper onClick={() => dispatch(openModal(<CartModal />))} role="cart-icon">
      <Cart src={CartImage} alt="cart-icon" />
      {cart.length > 0 && <AmountDisplay role="amount-display">{cart.length}</AmountDisplay>}
    </Wrapper>
  )
}