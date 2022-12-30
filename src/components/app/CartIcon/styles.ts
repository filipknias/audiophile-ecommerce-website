import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Cart = styled.img`
  cursor: pointer;
  height: 25px;
`;

export const AmountDisplay = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.palette.orange};
  color: ${({ theme }) => theme.text.white};
  font-weight: ${({ theme }) => theme.fonts.normal};
  font-size: 0.8rem;
  border-radius: 50%;
  top: -0.375rem;
  right: -0.75rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;