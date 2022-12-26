import { HamburgerMenu, BrandGroup, Brand, Nav, NavLink, NavLinks, Cart, Background } from './styles';
import { Container } from 'components/common';
import CartIcon from 'assets/icon-cart.svg';
import HamburgerIcon from 'assets/images/shared/tablet/icon-hamburger.svg';
import { getCategories } from 'utilities/products';

const navItems = ['home', ...getCategories()];

export const Navbar = (): JSX.Element => {
  return (
    <Background>
      <Container>
        <Nav>
          <BrandGroup>
            <HamburgerMenu src={HamburgerIcon} />
            <Brand role="brand">audiophile</Brand>
          </BrandGroup>
          <NavLinks>
            {navItems.map((item) => 
              <NavLink 
                key={item} 
                active={false}
                role="nav-link"
              >
                {item}
              </NavLink>
            )}
          </NavLinks>
          <Cart src={CartIcon} alt="cart-icon" />
        </Nav>
      </Container>
    </Background>
  )
}