import styled from "styled-components";
import { Breakpoints } from "types/Product";

interface ProductImageProps {
  image: Breakpoints;
}

export const Wrapper = styled.div`
  display: flex;
  height: 500px;
  gap: 30px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:nth-child(even) {
      flex-flow: row-reverse;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    height: 700px;
  }
`;

export const ProductImage = styled.div<ProductImageProps>`
  border-radius: ${({ theme }) => theme.borderRadius};
  flex: 1;
  background-image: url(${({ image }) => "/src/assets/" + image.desktop});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => "/src/assets/" + image.tablet});
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url(${({ image }) => "/src/assets/" + image.mobile});
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
  &:nth-child(odd) {
    padding-left: 7rem;
  }
`;

export const NewProductLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 15px;
  letter-spacing: 8px;
  color: ${({ theme }) => theme.palette.orange};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.text.dark};
  font-size: 1rem;  
  line-height: 1.6;
`;