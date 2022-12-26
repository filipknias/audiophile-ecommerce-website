import styled from "styled-components";

interface NavLinkProps {
  active: boolean;
}

export const Background = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.dark};
`;

export const Nav = styled.nav`
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text.white};
  background-color: ${({ theme }) => theme.background.dark};
`;

export const Brand = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 35px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const NavLink = styled.li<NavLinkProps>`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ active, theme }) => active ? theme.palette.orange : theme.text.white};
  letter-spacing: 3px;
`;

export const Cart = styled.img`
  cursor: pointer;
  height: 25px;
`;

export const HamburgerMenu = styled.img`
  cursor: pointer;
  height: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;