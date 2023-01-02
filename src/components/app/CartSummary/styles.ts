import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.background.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  height: min-content;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartItemGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ItemName = styled.p`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.black};
  margin-bottom: 5px;
  display: block;
`;

export const ItemPrice = styled.p`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
  display: block;
`;

export const ItemAmount = styled.p`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItemTitle = styled.span`
  font-weight: ${({ theme }) => theme.fonts.normal};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
  text-transform: uppercase;
`;

export const ListItemText = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.black};
`;

export const ListItemTextOrange = styled(ListItemText)`
  color: ${({ theme }) => theme.palette.orange};
`;