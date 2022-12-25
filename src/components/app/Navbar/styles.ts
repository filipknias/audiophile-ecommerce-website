import styled from "styled-components";

interface NavLinkProps {
  active: boolean;
}

export const Nav = styled.nav`
  width: 60%;
  margin: 0 auto;
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
`;