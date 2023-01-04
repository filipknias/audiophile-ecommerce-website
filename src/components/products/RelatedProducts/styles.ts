import styled from "styled-components";
import { Breakpoints } from "types/Product";

interface ImageProps {
  image: Breakpoints;
}

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  flex: 1;
`;

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 300px;
  background-image: url(${({ image }) => "/assets/" + image.desktop});
  border-radius: ${({ theme }) => theme.borderRadius};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => "/assets/" + image.tablet});
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url(${({ image }) => "/assets/" + image.mobile});
    height: 200px;
    background-size: contain;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;