import styled from "styled-components";
import { Breakpoints } from "types/Product";

interface ImageProps {
  image: Breakpoints;
}

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  height: 600px;
  margin: 80px 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 500px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 400px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 300px;
  }
`;

export const GalleryImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FirstImage = styled(GalleryImage)<ImageProps>`
  background-image: url(${({ image }) => "/src/assets/" + image.desktop});
  grid-column-start: 1;
  grid-row-start: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => "/src/assets/" + image.tablet});
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url(${({ image }) => "/src/assets/" + image.mobile});
  }
`;

export const SecondImage = styled(GalleryImage)<ImageProps>`
  background-image: url(${({ image }) => "/src/assets/" + image.desktop});
  grid-column-start: 1;
  grid-row-start: 2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => "/src/assets/" + image.tablet});
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url(${({ image }) => "/src/assets/" + image.mobile});
  }
`;

export const ThirdImage = styled(GalleryImage)<ImageProps>`
  background-image: url(${({ image }) => "/src/assets/" + image.desktop});
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => "/src/assets/" + image.tablet});
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url(${({ image }) => "/src/assets/" + image.mobile});
  }
`;