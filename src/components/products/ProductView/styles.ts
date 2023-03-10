import styled from "styled-components";
import { Breakpoints } from "types/Product";

interface ImageProps {
  image: Breakpoints;
}

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 2rem 0 4rem 0;
`;

export const GoBackLabel = styled.a`
  color: ${({ theme }) => theme.text.dark};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 1rem;
  cursor: pointer;
  margin-right: auto;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProductImage = styled.div<ImageProps>`
  border-radius: ${({ theme }) => theme.borderRadius};
  flex: 1;
  background-image: url(${({ image }) => "/assets/" + image.desktop});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => "/assets/" + image.tablet});
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url(${({ image }) => "/assets/" + image.mobile});
    margin-bottom: 2rem;
    background-position: center;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  height: 500px;
  padding: 2rem 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 400px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    height: 700px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  flex-direction: column;
  gap: 20px;
  padding: 0 3rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;

export const NewProductLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 15px;
  letter-spacing: 8px;
  color: ${({ theme }) => theme.palette.orange};
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.text.dark};
  font-size: 1rem;  
  line-height: 1.6;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 70%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
  }
`;

export const Price = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: 1.2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const StackTitle = styled.h1`
  font-size: 1.75rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;