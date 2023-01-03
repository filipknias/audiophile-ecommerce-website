import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
`;

export const Header = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.black};
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.text.dark};  
`;