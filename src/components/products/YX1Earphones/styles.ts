import styled from "styled-components";

export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    height: 400px;
  }
`;

export const ImagePlacement = styled.div`
  background: url('/assets/images/home/desktop/image-earphones-yx1.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  flex: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url('/assets/images/home/tablet/image-earphones-yx1.jpg');
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url('/assets/images/home/mobile/image-earphones-yx1.jpg')
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-left-radius: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6rem;
  gap: 30px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 2rem; 
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;