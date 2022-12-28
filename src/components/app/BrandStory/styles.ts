import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  height: 600px;
  margin-bottom: 100px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 400px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-flow: column-reverse;
    height: 600px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  flex: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1.5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    text-align: center;
  }
`;

export const Header = styled.h1`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 2.5rem;  
  line-height: 1.2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.text.dark};
  font-size: 1rem;  
  line-height: 1.6;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1; 
  border-radius: ${({ theme }) => theme.borderRadius};
  background: url('/src/assets/images/shared/desktop/image-best-gear.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url('/src/assets/images/shared/tablet/image-best-gear.jpg');
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url('/src/assets/images/shared/mobile/image-best-gear.jpg');

  }
`;

export const OrangeText = styled.span`
  color: ${({ theme }) => theme.palette.orange};
`;