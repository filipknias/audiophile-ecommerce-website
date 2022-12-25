import { Brand, Nav, NavLink, NavLinks, Cart, Background } from './styles';
import { Container } from 'components/common/Container';
import CartIcon from 'assets/icon-cart.svg';

const navItems = ['home', 'headphones', 'speakers', 'earphones'];

export const Navbar = (): JSX.Element => {
  return (
    <Background>
      <Container>
        <Nav>
          <Brand>audiophile</Brand>
          <NavLinks>
            {navItems.map((item) => 
              <NavLink key={item} active={false}>{item}</NavLink>
            )}
          </NavLinks>
          <Cart src={CartIcon} alt="cart-icon" />
        </Nav>
      </Container>
    </Background>
  )
}