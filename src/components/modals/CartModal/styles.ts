import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.black};
  text-transform: uppercase;
`;

export const RemoveAll = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
  text-decoration: underline;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast} ease-in;
  &:hover {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ItemName = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.black};
  margin-bottom: 5px;
`;

export const ItemPrice = styled.h4`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
  text-transform: uppercase;
`;

export const TotalPrice = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.black};
`;