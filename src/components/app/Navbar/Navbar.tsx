import { Brand, Nav, NavLink, NavLinks, Background } from './styles';
import { Container } from 'components/common';
import { getCategories } from 'utilities/products';
import { Link, useLocation } from 'react-router-dom';
import { CartIcon } from 'components/app';

export const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Background>
      <Container>
        <Nav>
          <Brand role="brand">audiophile</Brand>
          <NavLinks>
            <Link to="/">
              <NavLink active={pathname === "/"} role="nav-link">home</NavLink>
            </Link>
            {getCategories().map((category) => 
              <Link key={category} to={`/${category}`}>
                <NavLink active={pathname === `/${category}`} role="nav-link">
                  {category}
                </NavLink>
              </Link> 
            )}
          </NavLinks>
          <CartIcon />
        </Nav>
      </Container>
    </Background>
  )
}