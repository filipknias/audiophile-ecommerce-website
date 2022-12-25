import { Brand, Nav, NavLink, NavLinks, Cart } from './styles';
import CartIcon from 'assets/icon-cart.svg';

const navItems = ['home', 'headphones', 'speakers', 'earphones'];

export const Navbar = (): JSX.Element => {
  return (
    <Nav>
      <Brand>audiophile</Brand>
      <NavLinks>
        {navItems.map((item) => 
          <NavLink key={item} active={false}>{item}</NavLink>
        )}
      </NavLinks>
      <Cart src={CartIcon} alt="cart-icon" />
    </Nav>
  )
}