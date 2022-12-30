import CartImage from 'assets/images/shared/desktop/icon-cart.svg';
import { Wrapper, Cart, AmountDisplay } from './styles';

export const CartIcon = (): JSX.Element => {
  return (
    <Wrapper>
      <Cart src={CartImage} alt="cart-icon" />
      <AmountDisplay>1</AmountDisplay>
    </Wrapper>
  )
}