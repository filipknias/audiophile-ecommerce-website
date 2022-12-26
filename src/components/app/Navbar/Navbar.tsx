import { HamburgerMenu, BrandGroup, Brand, Nav, NavLink, NavLinks, Cart, Background } from './styles';
import { Container } from 'components/common/Container';
import CartIcon from 'assets/icon-cart.svg';
import HamburgerIcon from 'assets/images/shared/tablet/icon-hamburger.svg';

const navItems = ['home', 'headphones', 'speakers', 'earphones'];

export const Navbar = (): JSX.Element => {
  return (
    <Background>
      <Container>
        <Nav>
          <BrandGroup>
            <HamburgerMenu src={HamburgerIcon} />
            <Brand>audiophile</Brand>
          </BrandGroup>
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