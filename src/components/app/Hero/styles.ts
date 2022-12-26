import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.dark};
`;

export const HeroImage = styled.div`
  border-top: 2px solid rgba(255,255,255,0.1);
  background-image: url('/src/assets/images/home/desktop/image-hero.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url('/src/assets/images/home/tablet/image-hero.jpg');
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url('/src/assets/images/home/mobile/image-hero.jpg');
  }
`;

export const HeroContent = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const NewProductText = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  letter-spacing: 8px;
  color: ${({ theme }) => theme.text.light};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 60px;
  color: ${({ theme }) => theme.text.white};
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fonts.normal};
  font-size: 15px;
  color: ${({ theme }) => theme.text.light};
  line-height: 1.7rem;
`;