import { HamburgerMenu, BrandGroup, Brand, Nav, NavLink, NavLinks, Cart, Background } from './styles';
import { Container } from 'components/common';
import CartIcon from 'assets/icon-cart.svg';
import HamburgerIcon from 'assets/images/shared/tablet/icon-hamburger.svg';
import { getCategories } from 'utilities/products';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Background>
      <Container>
        <Nav>
          <BrandGroup>
            <HamburgerMenu src={HamburgerIcon} />
            <Brand role="brand">audiophile</Brand>
          </BrandGroup>
          <NavLinks>
            <Link to="/">
              <NavLink active={pathname === "/"}>Home</NavLink>
            </Link>
            {getCategories().map((category) => 
              <Link key={category} to={`/${category}`}>
                <NavLink active={pathname === `/${category}`} role="nav-link">
                  {category}
                </NavLink>
              </Link> 
            )}
          </NavLinks>
          <Cart src={CartIcon} alt="cart-icon" />
        </Nav>
      </Container>
    </Background>
  )
}