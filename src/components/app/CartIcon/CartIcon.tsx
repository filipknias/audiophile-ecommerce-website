import CartImage from 'assets/images/shared/desktop/icon-cart.svg';
import { Wrapper, Cart, AmountDisplay } from './styles';
import { useAppSelector } from 'redux/hooks';

export const CartIcon = (): JSX.Element => {
  const { cart } = useAppSelector((state) => state.cart)

  return (
    <Wrapper>
      <Cart src={CartImage} alt="cart-icon" />
      {cart.length > 0 && <AmountDisplay>{cart.length}</AmountDisplay>}
    </Wrapper>
  )
}